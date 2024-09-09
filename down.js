const axios = require("axios");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// 生成随机文件名的函数
function generateRandomFilename(originalFilename) {
  const randomBytes = crypto.randomBytes(16).toString("hex");
  const extension = path.extname(originalFilename);
  return `${randomBytes}${extension}`;
}

function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

const fileNames = [
  "cc81e735c91ecc41ef08616222998295.jpg",
  "baa6e52460e5cfee89f0ee9c72195932.jpg",
  "eb2286e0a7e42886aa1a224790cb34ed.jpg",
  "a5fad7d42783132c85c77607913ba4ff.jpg",
  "f10a44d43ac94dbbf52804009f8cb908.jpg",
  "f5de0983de95cfa3c42e34d7d24c31e9.jpg",
  "a96b8bed23e7eba232746de0f2d5875b.jpg",
  "abe5a0ea472857eb4e58209b677b7cfd.jpg",
  "12c8241c1a25eb000f8a739f774513a3.jpg",
  "d84ba46b5cd7ca6d1ec5d8e00644dfa6.jpg",
  "2cb72fe898492559bfcd6811f1ef65df.jpg",
  "029af38dd29d58a8ae0df1961b28629b.jpg",
  "0bbf8044059a8bc7c2f494237b361148.jpg",
  "a6a4f1592333d2367cba9d04287c405e.jpg",
  "3c2cb312ffeff971cabf923eb85e321a.jpg",
  "d82aab7d3844f92b692f9465a87ed980.jpg",
  "bb8bda5a70424c1b66c64f025d4c4326.jpg",
  "9ab62735802e260f19870e82f7a77894.jpg",
  "e0a1bb64339da731bf3bf2f8e84f96ad.jpg",
  "da6759f39d2c899e922ec2da71717a84.jpg",
  "9047a1216bc1894cf1eddc20e7bc7117.jpg",
  "7c26401f0e6692a0fc43cf67762f40c9.jpg",
  "4ed800783fc34aac45089179ac6a9db2.jpg",
  "0b7c2dc642f011af092ad2baf34fcace.jpg",
  "369b5ac39b9718e39eaf977a176fc7e2.jpg",
  "f783dca86d9a1918475c5ee5a525bd8d.jpg",
  "0b44e13b344baa4b56fd22812111ed72.jpg",
  "f74f230e35fa5433ac12bfe4acb96e5e.jpg",
  "d89e5688e5584bfef3e813a16c874515.jpg",
  "3ffeacac7d9d8d8c86702ece71a1f922.jpg",
  "99188b0e9d31ab39be244ffa07826840.jpg",
  "b7461b51935d566335c740dc7d178ded.jpg",
  "90e8481cd4d2689c06fb6b5138b283e5.jpg",
  "ac2f6c14ec80ec3305f43e2c5a947427.jpg",
  "0bd24dfc723dffc9a849b44674f6212d.jpg",
  "348b49c288a6ee3436e0a4592172946a.jpg",
  "0ae88d7a3de00e613aa6384e44e9464c.jpg",
  "e80a6c67231f66199a7eb3be1c062b6f.jpg",
  "13bf149e5916d36cbb8c46c76812ea71.jpg",
  "ce91446319331a54be0fbe701226eefc.jpg",
  "481e4b9de58bae1135d308a47587614f.jpg",
  "63691962e4ec08290ec60154000b7f7a.jpg",
  "f66a81c0b6a12674814f24fbbb41fd46.jpg",
  "6fed413d828cc3053b5dae2e6337b431.webp",
  "918398eaa340c71216c8e982be7801e0.jpg",
  "94c30a9dc398c252ba5cfd4d499ab14a.jpg",
  "c633304065ec78ae354084476f372bf2.jpg",
  "6524f5906a8740e3bec7d1f24f272c72.jpg",
  "2d559289a90a78ad624c0305644f2902.jpg",
  "3362bf66bd20f1453c37e926865d90d7.jpg",
  "b8eee14da03c365c00f6ccb747ca268f.jpg",
  "c620c903e4664343d223b906381352fd.jpg",
  "3253092323cd859cd74e2652757f534f.jpg",
  "337eda9a9fef6332f8e2ba0f47c9ee43.jpg",
  "e90ed7712df072d3ccdbd9a54736ad96.jpg",
  "be441a36c57ece51ca44530fa253fc4f.jpg",
  "de8aa28d108c0a8d418fe2cd56df44b4.jpg",
  "d2aa2f595cc537b3ec64d03d71a6d27a.jpg",
  "058ae1711071ced2731170b0547e2fad.jpg",
  "b23ea27a296e62bf22d74d20c04693a0.jpg",
  "4ef76b9cb9ed25a9a6047038394c1d91.jpg",
  "881bba21e380a365c22d4f2bb6a3e075.jpg",
  "2d76957a66bfc233a026b1a8478a9c5b.jpg",
  "c33d444aebfabf1be63e520abb0e2413.jpg",
  "d1f1291607e2a43cb1a43aaf63e4dc46.jpg",
  "acb8490841f0100b7ceba8abb99e9a4e.jpg",
  "8f05becbf9bdaae135be37a18c1ccfe5.jpg",
  "8cd3c7590397ad8e52d1efd259630308.jpg",
  "5e7c96e60f2f923cc38f5d22e85c00b2.jpg",
  "87d4c58c9c35b53363382f6c1eb2305a.jpg",
  "c10cf6eabbaab58c44902b82824f347b.jpg",
  "28d62f04596478c78b210a9257905800.jpg",
  "988134ec6f6dced6fcb8b06899a92883.jpg",
  "d5c07a6e4de12d7a8193d747e35e7330.jpg",
  "35a7f8a3730d07ff84d4ae7353e10dac.jpg",
  "7ebc08c20f5770b3c257986d8dd192a4.jpg",
  "2940c01fd659692c58c23b6a9c88708c.jpg",
  "57e142fcb2a0c8a45e26bb93c266b67f.jpg",
  "393c3e19023c854a54c780512ebe8346.jpg",
  "5e1a0db53e3eae555c9450aecdd5f9f5.jpg",
  "2018becbc3aa926b7097475dbdd1931d.jpg",
  "ef3781ffe18c2801debd4b81c4360215.jpg",
  "50885d7638f85f2eadbb6a5728ec2288.jpg",
  "2a108af842974c5b2c8497e32eaffc9a.jpg",
  "57254bd96fb5aa8bf390efed8ebff7fc.jpg",
  "c4e1af4bc6ed8fa4ac7b84260190f1ab.jpg",
  "34176ec67365fd512f77d9252ad6ce9f.jpg",
  "ca126a638dc231e6c4d551e8da445a59.jpg",
  "1081ff6eb312def7b9c249b12d91d8e0.jpg",
  "30970291e4d70e2f3fac587b40f60251.jpg",
  "a1483b3050742702343c44114f0fd543.jpg",
  "b68e73cdb02c7cf8d54ffccd6cab4d80.jpg",
  "b5b61b0514410364aeb3509c18f4b789.jpg",
  "9109cf48422e984b7d711261bf586327.jpg",
  "82dca4ac93163def342224f64159821a.jpg",
  "28d7ea05d7a601cef4ea9eb4371d7275.jpg",
  "1d9ec9bea82eae3400f81bf45ea528e0.jpg",
  "2401ea42724409eddb62cd60ae5baffb.jpg",
  "6056f30d3294cc8d17a71ac9ff6b8771.jpg",
  "e2e5c4efe3ccc1a662db3528410d2dee.jpg",
  "5e8e9f52ef1d864b6c0c71022358e0f3.jpg",
  "7c3fe12362f4794ed96c3458da0e3f38.jpg",
  "b6b5ad8552a084241efbc1255b7642b3.jpg",
  "2ec9b833781efa6d12fdeea38a554fc7.jpg",
  "5ddc8b91dd00b20b7471d334b3cfb2bb.jpg",
  "f74c3d0dec92f770bdb50648b10255e2.jpg",
  "846e230451667207b691d41464a1740d.jpg",
  "a4876a52960111018fb7a974be934789.jpg",
  "0daf825e916419c96fe78ea8575e969f.jpg",
  "d18015daeab8ef3f4b7e4154bc39ab4d.jpg",
  "af01468ff510717b967b07de2a56db97.jpg",
  "3d1393e3738e4e8b8590090bcf6a29de.jpg",
  "814255316af3d22db040249602cb2efc.jpg",
  "c7151426bf45bdacf0b449e8d1211bc7.jpg",
  "669488e0a8f02943440bc72e8fdcbaa6.jpg",
  "9f969e791637297dfa1dd998f36aa361.jpg",
  "14b3cb36e948e022f20782a82b4e80fe.jpg",
  "0bf6962e90628729c3653bb04a75afef.jpg",
  "c10eb64921f5dedb7b49432fa81d8ac5.jpg",
  "b8182b319f8555e45a3483f0c686cf27.jpg",
  "4fc01a2e17f4a0ff2b3e65903b3ebed5.jpg",
  "9d0e20af5d90fd7f74bca0a565701187.jpg",
  "75c83ecc41170d1d25f0e51b76544fc1.jpg",
  "17e0af1090dde85f1fe7f10824fa0a37.jpg",
  "4d71a445d1494f93c70d6bc5b8655336.jpg",
  "f3bab140a1db93e570be97ec87f41821.jpg",
  "45754d78574b1d24883184b064507410.jpg",
  "00c7de582bbdd84959812bd24b6c154c.jpg",
  "aebe1cb9d2f94b1962eaaf20ecf91f0f.jpg",
  "f0c3f613c8494b11f4c86b2c669d6559.jpg",
  "e0f8e87ed297141e1a812db623eea197.jpg",
  "52c3f80eb97712da93e85dce83513c8f.jpg",
  "52fd3a17e50485ff04c7be0ade377fff.jpg",
  "926f29ff81672048ac0bde990395c0b3.jpg",
  "8917b5963d8ade7c63f58131dc546c41.jpg",
  "2fde283ae95e7db7a0b016d9ab8d0aa9.jpg",
  "70190e06c18225ceaa132ee81806faf6.jpg",
  "b5e5a00fa67f5c01eeb72b81713b3d78.jpg",
  "3457ea373c6a68718f7d15e093d6442d.jpg",
  "92725deb0a5137ad67b5a4e5bc5eb903.jpg",
  "e924aee30ba409c542ffdc1892fc4953.jpg",
  "90422d71840e26302f8a145cf714c7c7.jpg",
  "be6cda018fa7f1b6bc558cc4a5c19a6b.jpg",
  "2f7c3b3ecee9728076913e7a4604df3d.jpg",
  "edabea4383214635ccee370797ea1cdd.jpg",
  "64c6736ad2c3bca6198dc8f2f7b5ea24.jpg",
  "d9918396e91a854367e548cb40c97560.jpg",
  "08099ec59718957df7eb393e27ca5147.jpg",
  "dfd349fc1f42b1bf10ee36226f3104d5.jpg",
  "a325aecfdc4b5dbd7b50296a4f66bcff.jpg",
  "a0b6326318efac111bb07b983d077265.jpg",
  "10d909a4e172914a49bceeadf5dfd654.jpg",
  "4068b07b6a645f45ca30e6a36599678a.jpg",
  "19c0fab05e95cd0f8a11767db0d99323.jpg",
  "ef6c882594190ba3db131bcd8470a16b.jpg",
  "dfca5be6bb6a659355573d5ae73696fd.jpg",
  "fff5a4faddcc4bc73b30bd0ff3a62db2.jpg",
  "29f320d87cc2d61b0b4df45f014c0cd0.jpg",
  "388d0ad3ce7129183c584084ad1c5fbc.jpg",
  "305eecdb9b468758d9bcd9ca68ba06be.jpg",
  "8ee2c055c7956673a5851ab20b808395.jpg",
  "dbdd23d09904c26d638440af0c3534e9.jpg",
  "054ebb716cf4549584e97f0070eea333.jpg",
  "4bbe808e41eb2c57d9b347335fa9e9c2.jpg",
  "943fb6ce1ad840a35d78c6a1faf66171.jpg",
  "488507331ab05c1f6a75d55743106467.jpg",
  "8e9dfc2466a4f881dc17a46ff6916731.jpg",
  "7fcbe21c6a36568b0cadf2f7187f48d2.jpg",
  "f7a8677d4a73f96d2719a191a84e4569.jpg",
  "92fa56e3f5b62a79743f35c48624557b.jpg",
  "468553e95a9951b4c82237eabc016657.jpg",
  "7f36cb5026da860ae40814a8b541feb6.jpg",
  "ba8f8b71b02c5845f9bbeba07a07af32.jpg",
  "5c5536430bce1f2e75e25b54dce6b15e.jpg",
  "778f55f43609cd42e27e22b9e1a09f26.jpg",
  "4bd2aa6e2b83ff59f50e569ed7e14096.jpg",
  "af2093a5ce2f106616b99099a82ef857.jpg",
  "6908945df44e13b5aa3c4050685e59e8.jpg",
  "ece2b7feffd7cf034593ff76f69d23c3.jpg",
  "238fcb78b02b2ceef8ba6c5d86322236.jpg",
  "dc18aa53a25a90846cad9b4399926534.jpg",
  "1438ebdcd5378c8cd33a84858dc4b895.jpg",
  "252d0a8911959553a509472f8ed9c3f8.jpg",
  "73126352f893c289c3ef68325feb55ea.jpg",
  "3190dd6d714195b42484f4e5053f0fbc.jpg",
  "30bb8cde0eefb30eb56f94b754dcbe56.jpg",
  "ca0a580eb117ac9222afe69ca32daeb0.jpg",
  "08cdf68934825a4bad8581755c6405c0.jpg",
  "71ea2caeca565b0ff94c735c0674b83e.jpg",
  "3fcf5d379405e409fd98d8adb47506b1.jpg",
  "83029c2ee464eec71da7a916c31021d4.png",
  "2da7cf7d476c93645f5c87958598a2bc.jpg",
  "f600e52582accbffdc5ed0a96255633a.jpg",
  "d62d0e63f7eec8c76fe3d50a804fa680.jpg",
  "679959ec2bf64bee27cb9ee04d207068.jpg",
  "a52f9947e0dab3a547570f0620d16b3f.jpg",
  "10fab79b5362287be09f520fc4e25f84.jpg",
  "ee354f75b5269a4a53930c74ddb59949.jpg",
  "0869bc7be94d17d1e14bad1af9b98684.jpg",
  "e2dbba782a9fd07bc37c96e4a191a9d5.jpg",
  "6a3484e8fac6555175247d2f893276e9.jpg",
  "6fbcce03404301d93d3a1167d1bae65c.jpg",
  "611cdf043916139997884ffdacb9d810.jpg",
  "ab5781e6134a0190c12b5af0bf4d9207.jpg",
  "14d334d4f516b5093a4afd21dfe11443.jpg",
  "3c252278bfa9a06b44ca1fe37cb94588.jpg",
  "614ee1b975f8106c23e5a9c7ad0b33ef.jpg",
  "f1a03c88e07d9daec9f5c166d59dcc85.jpg",
  "224320503da7bc7171570f04ed0e47f0.jpg",
  "136751d6502a24e18c71babee4a0d50f.jpg",
  "d65d4c28526107dcc5c1584a8d8d3510.jpg",
  "c2aa7b084c22266089948bfda0fcb6f8.jpg",
  "024550dc968ab7493b35b52489d4e026.jpg",
  "a7780df86e3146b824551e4f849f62a0.jpg",
  "196a6302b7a23d683f967ba06c92436a.jpg",
  "9b09508867d87268b8b4f7c2b88d4ca7.jpg",
  "a2fe1b8e3652b586af431df3f8c94d0d.jpg",
  "749b270765b10dff9fe56da030034583.jpg",
  "00f0bc80f95ba10b9f4a242ced3d1766.jpg",
  "0e69fd8504352f2cf29ef967a9b1d207.jpg",
  "dd2f9d7d4650d257e0245971b263f1b5.jpg",
  "df0de58f939982a50ef8e8dcd0fe5235.jpg",
  "69339ba343e3e47b256d2e7ff7b181fd.jpg",
  "26e2bca5380cc3df4bbe66b2ee49987f.jpg",
  "a935f4792fbbb809b4186f43ef4158c4.jpg",
  "c7a279da08a1e18f03db38c02f929c17.jpg",
  "3d726834193d80b166053dcf8410b617.jpg",
  "0e61b512c12d9de26853c8413da0c100.jpg",
  "05ccf89b8817b37e84d69cc10f0bd7e9.jpg",
  "25321c7095762785ce8763d0171806f8.jpg",
  "2414c14ed7dc4650e32d7ade8d623f8a.jpg",
  "7485817b152e5e4a0ee1f77d8be7dda7.jpg",
  "db0b03f4a1d42bda37e0d18fa3bef785.jpg",
  "787cd80514990ae3d80e255827706568.jpg",
  "09173279d91cc84d83dd45734d216fd4.jpg",
  "899c65114e851013fa2c97fb919609ca.jpg",
  "fbd00e2c69aab81b9bc116f375a985fe.jpg",
  "e687cbaedd331ca693f32bd1e22419d0.jpg",
  "9531f4ed86a1b49fca035fd54c61e54e.jpg",
  "6937f1f4b92335d9b89cc37b4873262c.jpg",
  "9a88fddb11150ea47613e220fb7e125b.jpg",
  "b565292bb0f356c485934101ed139c06.jpg",
  "04ace3d9c742c898a9b9c540441022e8.png",
  "d631a943a1205ff7b84dd5e0689997e1.jpg",
  "61262c2c2c4963e3bcebaf1f24880aad.jpg",
  "23032b64b0210617321c7625b6d2f715.jpg",
  "aa9d3227c7bbd4de0f4e30738219a6f9.png",
  "4663ca3b3d38a11179495c8a00156d7d.jpg",
  "b3ee254dc3e909453904fc3fceab6eca.jpg",
  "03effefedb7adb251765e215b08d0503.jpg",
  "e4617c45ed9968e71d6a528480b0e596.jpg",
  "65b758a2f0e9fefae238d04dc18fed85.jpg",
  "5daf588160e96e6162f42f4406210942.jpg",
  "11a8e7803daf2cdb8d10ee89213f3d77.jpg",
  "148932a82931af5b12d7525a5ff89a8e.jpg",
  "d2245a0c79d86accd247b7170dc49d20.jpg",
  "8ce6fe7704b6021a849a801396c4d3ab.jpg",
  "f2124b0b812c239113f8e8afe236abb9.jpg",
  "0024a24e90c9073245ffc544fae8c380.jpg",
  "f621f95eb11d9d48b8c31452c0061f3e.jpg",
  "1d6235082ca014566737440ce734d54d.jpg",
  "1c43efa845afcb1d3afec339cca5b02a.jpg",
  "d68f30b5836bb71f18aad4f1f1115f88.jpg",
  "3fe931c2b0682edde6ef5ce5d5c22ee4.jpg",
  "1c9349929c45e7517d7ad0dff0742407.png",
  "60fcb3208b437f9bb3e113c3e955beb9.jpg",
  "8ce2eea1f87986f61ac67470a97668c0.jpg",
  "fa0ec88fb35c689f01e457c34137ecba.jpg",
  "169ed99e89a43792a2832e3960e70efb.jpg",
  "5dbb290f744d1a34bc6e27c5e3d1fef8.jpg",
  "271fce209a23214071ce9ca38cff96a1.jpg",
  "17570e057fb5382333aca4f95d78b701.jpg",
  "fea2e5cb8da4995af3c31e4afc69b8df.jpg",
  "3e5b4f444d2c660427a261b613920b3a.jpg",
  "464caec33e3e72cb89b0bf0012935fc2.jpg",
  "4d37f078a30e62df04ad99442cb454bf.jpg",
  "c1790777fc0f936a78d98fd52b9e95cc.jpg",
  "ea69d1a6a6b20c78fd9da8d2c412a015.jpg",
  "a51f6741699c56b3a366e4233967bec2.jpg",
  "74a8eb5dc09a29f01644345bedf5e067.jpg",
  "674dd66b31f48b6be44ffb9e38c0a494.jpg",
  "9d160b57c5582581185ded130346ccd9.jpg",
  "6030c2ab2698b0919357bc017c4e8978.jpg",
  "7f6b469f8085b0b0874d2f7d17985adb.jpg",
  "d20a213339d1d417b760dda4b5434dc5.jpg",
  "ba93e0aa4de81f080ba15ac88e7d2409.jpg",
  "be5d46132a7a8da105cf5c6b1762d431.jpg",
  "e4aec179c9dc4815d177a82de1b7219c.jpg",
  "7edd17e0ceb7fc2e376e055428cf2798.jpg",
  "ee1faaf12cfd663d6916dc5ab1e29a0d.jpg",
  "6e366fd0165e4239542d9742bd0e6eda.jpg",
  "2fcdf55375ce73d495287ea38dd75a38.jpg",
  "a665350f04bb0d3f3a9a5b7efdc8ab50.jpg",
  "fc059e37926cde21775d8422be91ac86.jpg",
  "0b53643d19a941c7acc6e4c7cde8f57e.jpg",
  "b1b5c4e6e907bd7b94bec1d4f1ad78ca.jpg",
  "2a81d3fcc941c4ffec4787b7666ef222.jpg",
  "eea60eef151024ca0a97eee083449abf.png",
  "d52a497b77bd661f1b54a86b1dda22bd.png",
  "5ac09dcfdc35f534c8710b1164fb7a4d.jpg",
  "c757b005cf865eabe59baa52ee42c288.png",
  "15531ec618993e0ce76532195a47f987.jpg",
  "a8021a255a4e58580f358e6657550ba0.png",
  "4bb8a96ed8c318af2176871159e91b51.jpg",
  "7a09cad130b9b1d51875afe24a27d4e5.jpg",
  "8c7621dda9a0f2d3a7c6043bba46c967.jpg",
  "d56b98fc199251e5f341c57762763308.jpg",
  "7442fd7880838d06464337ae0602c7cb.jpg",
  "6573715bb7c91b40ea7169a603dd381b.jpg",
  "3e1e0a03a30feb35e895fdc52b26ae3a.jpg",
  "ad06a432ee78795532f9747c8bcb0a9b.jpg",
  "8b3aa7081453ed1e9f5db08f0d042ed2.jpg",
  "b42e678e7380db7b92cb55d662017be6.jpg",
  "9e58ecd6d9985bf762e3a77936f19958.jpg",
  "338f17b7926cb8b5eb2b74f302217a48.jpg",
  "efbf32caf973836e77866551b6e243b9.jpg",
  "e9239369bfcb072ecb733abcb1886e1d.jpg",
  "461cbf33a925f83f4ecd344bb57390cc.jpg",
  "b9d4af67b4f3a4965fa8352ca2933d92.jpg",
  "49f4d7104f78a5e339830092d56240bf.jpg",
  "0eeb7068421f7f1f42c7f84320c0def7.jpg",
  "01334f9ed840e0ae2f61b7722cbfae16.jpg",
  "0a687b39a791a436c84a575a26a13b82.jpg",
  "eb6da9aa0807b33ed4aa8bbb17cce055.jpg",
  "83bde94a5144e4c0dc30f8c1fa33eb0f.jpg",
  "98a1cb224a9bf1953bd35db73515c195.jpg",
  "5b12a1b7c08231ca88bac34889538770.jpg",
  "6beb2a1e81ffabbbe02a5ed4a1e34003.jpg",
  "ddd2b575ba2f267a78516a1a4f025375.jpg",
  "3519c6252b07b4940f1eb9f777ef2e08.jpg",
  "050521cc897b4e6bcbdbf7c774cd86fd.jpg",
  "2824adfa250ffbeff261155f70a7cad7.jpg",
  "c4b62a7421a77d269171a9d06bcfddbf.jpg",
  "fbede64c449cba0a89eb911c1c612ef8.jpg",
  "375a37fe8b2762006e467897f7a2359f.jpg",
  "5bca39be3f99360e195d3e4c45fe366f.jpg",
  "3c405d683a3b95c8b57e354e55f2419a.jpg",
  "82774a0b4a264ce6b4310855f8ab7c6f.jpg",
  "d470be69a9cf7763bd532920e488f790.jpg",
  "6d05e644f22966b8e67a44e8ee0744fb.jpg",
  "99039fbeb8e594552deb1f7eba50507a.jpg",
  "14ef0543431d2f20bb7b19ab9113bae2.jpg",
  "63bc864e070ec36d0a4a033dff00d3ae.jpg",
  "e536fedfefaf27a85724dceb9cafee65.jpg",
  "55a140846f97974f680ccaea47ce2f18.jpg",
  "13ef8ee8fdf13253e9fa680e2183c319.jpg",
  "faa4485157d67c34c182deb4ae429e96.jpg",
  "2127e484aea72259573efa77d2dcfb14.jpg",
  "d3753939e8eeefdb823f21d29b897e11.jpg",
  "77ea9016944a769a5f5e76db6a2e2e54.jpg",
  "7ffbcda30b30443b2d76f796876a2672.png",
];

// 指定保存目录
const saveDirectory = path.join(__dirname, "downloaded_images");

async function downloadImage(url, originalFilename) {
  try {
    const fullPath = path.join(saveDirectory, originalFilename);

    // 检查文件是否已经存在
    if (fs.existsSync(fullPath)) {
      console.log(
        `File ${originalFilename} already exists. Skipping download.`
      );
      return originalFilename;
    }

    const response = await axios({
      method: "GET",
      url: url,
      responseType: "stream",
    });

    ensureDirectoryExists(saveDirectory);

    const writer = fs.createWriteStream(fullPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(originalFilename));
      writer.on("error", reject);
    });
  } catch (error) {
    console.error(`Error downloading ${url}: ${error.message}`);
    return null;
  }
}

async function downloadAll(images) {
  for (const img of images) {
    const imgName = img.split("/").pop();
    const savedFilename = await downloadImage(img, imgName);
    if (savedFilename) {
      console.log(`Downloaded: ${savedFilename}`);
    } else {
      console.log(`Failed to download: ${savedFilename}`);
    }
  }
}

// 使用示例
// upload("lbxx", "/imgs/0a7e248b795775bb3094655a4b605823.jpg", true)
//   .then((result) => console.log("上传结果:", result))
//   .catch((error) => {
//     console.error("上传失败:", error);
//   });

const errorName = [];
async function uploadFile(filePath, fileName) {
  const formData = new FormData();
  let buffer = fs.readFileSync(filePath);
  let blob = new Blob([buffer]);
  formData.append("formFile", blob, fileName);
  axios
    .post(`http://20.210.109.247:2335/api/file?buckName=lbxx`, formData)
    .then((res) => {})
    .catch((err) => {
      errorName.push(fileName);
    });
}
function getMimeType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  switch (extension) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".pdf":
      return "application/pdf";
    // 添加更多文件类型...
    default:
      return "application/octet-stream";
  }
}

function getDirectoryFile(savaDirectory = saveDirectory) {
  fs.readdir(savaDirectory, async (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    // fileNames中不存在的files
    // const filesa = files.filter((file) => {
    //   return !fileNames.includes(file);
    // });
    // console.log(filesa);
    const filesa = files;
    
 
    
    await filesa.forEach(async (file) => {
      const filePath = path.join(savaDirectory, file);
      await uploadFile(filePath, file);
    });
    
    console.log(errorName);
  });
}
getDirectoryFile();

// const p1 = fetch("https://www.pinterest.com/resource/BaseSearchResource/get/", {
//   headers: {
//     accept: "application/json, text/javascript, */*, q=0.01",
//     "accept-language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
//     "content-type": "application/x-www-form-urlencoded",
//     priority: "u=1, i",
//     "sec-ch-ua":
//       '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
//     "sec-ch-ua-full-version-list":
//       '"Chromium";v="128.0.6613.119", "Not;A=Brand";v="24.0.0.0", "Google Chrome";v="128.0.6613.119"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-model": '""',
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-ch-ua-platform-version": '"10.0.0"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-app-version": "641c990",
//     "x-csrftoken": "01b17a787cddb3663a3c717b0f9acde4",
//     "x-pinterest-appstate": "background",
//     "x-pinterest-pws-handler": "www/search/[scope].js",
//     "x-pinterest-source-url":
//       "/search/pins/?q=%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0",
//     "x-requested-with": "XMLHttpRequest",
//     cookie:
//       'csrftoken=01b17a787cddb3663a3c717b0f9acde4; _auth=1; _pinterest_sess=TWc9PSZSZU95ZW1HZUsxMm53ZjNQeUFkR3JiZUpPZDlTamovMngzU3lWUHJpMmtHMi9oenErZWVKSGtDUzVoRUtWOWo3aDFmWENkVGQ4andxeTBwbVdwMVNiUjVwU0VMcVF5T0tGT2F2bjJJcytRRVUzSS84VkNCOTlrd1phWCtMRDlvVHhEZk1kYUpFQk5JNlFCWGY2Mk4xUHhqUmZNbGxzTjl3eGZhU1pOd1ZPOWpqRXFhZVYrRDdaRk4vR1hQNTJMWEdjR21maUpHQmJTa2Rkd1ZJaTlNSkV2WFd0VGxZSytSNkdOdVJpaU9kdStGNGk4a200VDZjb1drQnNzREV4QUNGb045bWwyTG9VbVNBdkdhWDV6ZTJjODJtd09PL2ZFR0pOSUNjT0R2eVAzSldTRGtvVUdNSmJHNks3RE8ydmJKbnpyS3VlUGx1SUlBWWk5MjhwL1NJbXdFaUVHU2w2UGJoY05Gb3Z6R3I0Tk55OVFWN29DVjVXcFF3V1pVTlVpN0lVM0lXQUcxZUxJaUtQcGRTaER0TEdBPT0mVXN3cXZLdWcwdnJyZmkrZjA5Y0JBcndPZEU0PQ==; __Secure-s_a=enJCb0RxQXI2MnFudUhzTWEzcDdFV3ZYRG4yOStoRWFEVlRPdUd6ZE4yYnNQTXBCOWo5d05wKzBRR0JZZTJkellYZDBGdDBmZVBJanRKWU90bXFETEUzYWJENkRHdXpGbjJyTlRHS0x2M0RXTkRHTUJINGlodllUc3JCK2FRbGREdHFPbXRQL1FZbUZzZldXbHZDUkZrM0dmdEtGNEpYZ1VSRkxyc0NqdHBuZkdBL0NBdzRhVGZlZzJLc0wxdXBsNk5iZXJCRkluZC9UZXRGOFl1QlpBS3RMNXowd01CNUwvZFJtK3NuS2dNaTFhdFl5S2l2dHBGakk1VGdUVENvRG05U2gyK3N2YTd3UXY2eGlzWnlJa0xGaUJVYVdZeDRvaGVuRTM2UHNvWlU9JkNyVDVzVEEvN0dMNWRIN2ozRk94akJuVklnYz0=; _b="AYDJ0xYJtW1D2LFXxrBNSvYFqlqS2cpBWMsH5Vh5yP1IaMH9Yq+l7p1h2Es5lYjV9V8="; _routing_id="829a5560-ab09-449e-977e-cd1e6766c45b"; sessionFunnelEventLogged=1',
//     Referer: "https://www.pinterest.com/",
//     "Referrer-Policy": "origin",
//   },
//   body: "source_url=%2Fsearch%2Fpins%2F%3Fq%3D%25E8%259C%25A1%25E7%25AC%2594%25E5%25B0%258F%25E6%2596%25B0&data=%7B%22options%22%3A%7B%22applied_filters%22%3Anull%2C%22appliedProductFilters%22%3A%22---%22%2C%22article%22%3Anull%2C%22auto_correction_disabled%22%3Afalse%2C%22corpus%22%3Anull%2C%22customized_rerank_type%22%3Anull%2C%22domains%22%3Anull%2C%22filters%22%3Anull%2C%22journey_depth%22%3Anull%2C%22page_size%22%3Anull%2C%22price_max%22%3Anull%2C%22price_min%22%3Anull%2C%22query_pin_sigs%22%3Anull%2C%22query%22%3A%22%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0%22%2C%22redux_normalize_feed%22%3Atrue%2C%22rs%22%3A%22direct_navigation%22%2C%22scope%22%3A%22pins%22%2C%22selected_one_bar_modules%22%3Anull%2C%22source_id%22%3Anull%2C%22source_module_id%22%3Anull%2C%22top_pin_id%22%3Anull%2C%22bookmarks%22%3A%5B%22Y2JVSG81V2sxcmNHRlpWM1J5VFVaU1YxWllhRmRXYkZwNFdWVlZOVll4U2xWUmFsSlhVak5TVkZaWGMzaGphekZWVjJ4d1RrMHdTbEZYYkdRd1kyMVdjMVZ1Vm1wU1ZYQlBWRlZTYzFKV2EzZFdiVGxYWWtad1dsZHJhRzlaVjBWNVZXdGtWVlpGV2pOYVJWcFRWbFpHYzFGc1RrNVdNMk40Vm1wS05GVXlTbkpOU0dSUVZsZG9XRlpyVmt0VlZsWnlWbXQwYVUxWFVsaFhhMXAzVkd4YWRWRnVhRmROVmtwUVZrY3hSMk5zU2xWUmJGWk9VbXR3V0ZaSGRGWmxSMDVYVTJ4V1ZXSklRbkJXYlRWRFpHeGFSVkp0ZEZSaGVsWllXVEJhYjFZeFpFbFJhemxhWWtaYVdGUnRlR3RXTVhCSFYyczFUbEpHV2xkWFZtaDNVakZrYzFkclpGUmlhMXBaV1ZSR1MyVldVbFZSVkZaWFZtdHdWbFpIZUhkaFZscHlWbGhrVjAxV1NreFZha0UxVWpGV2RWTnNaR2xTTW1nd1ZsWmFVbVF3T1ZsbFJscFVVbnBuZDFkc1dsWmxSbVJZVldwYVUyRjZWbk5aYTFwWFRURmFTR1JHVGxoaVZscDVWR3hTWVZaV1drWk9WVGxhVm5wR1QxcFhlRk5XYkZaMFkwVTVVMWRHU2pWV01uUmhVekZhVjFKWWNGSldSa3BaV1ZSR1MxTXhVbGRXVkVaWFZteGFNRnBGVlRWVk1ERlpVVzV3VjAxWFVqTlZha3BIVW1zeFdWVnNXbGRTV0VKUVYxWmtNRlp0VVhoYVNGSk9WbXR3Y2xSVlVuTlRWbFY0WVVoT1dHRjZSbmxaV0hCSFZsWmFSbU5HVGxWV1JVWTBWV3hhY21WdFRrWk9WazVUWWtaWmVsWnJXbUZoTVZGNVUydGFUbFpXV25CVmFrNXZZVVpzYzFkdFJtcE5Wa3BZVjJ0Vk1WUnNTblZSYm1oYVYwaENWRlpITVZkamF6RlZWR3hvVjJKRmNGQldSbFpoWTIxV1YxTnNWbFpoZWxaVVZXMTRXazFXV1hsbFJ6bFBVbXhHTkZVeWVHdFpWa3BJV1hwc2JWSkdWalpVYkZKU1RVVTFjVlJVVGs1bGJVNDFWRzV3YW1Rd05UWmFNMFpUVFZWYVRsTXlOVE5OTURWeFUxUkNXbVZ0VFRGWFZ6RmFUVVV3ZVZkVVNsQldNRlY2Vkd0U2FtVnNjSFJWV0dST1RXdHdjVlJzVW10aVZteDBWRmhrWVZZd1ZYcFViVEZQWVVVNVJXRXpiRTVXUmtWNVZGWlNWazB3T1VWVlZFWmFZV3MxYjFSV1VscE5SVEI1Vm0xc1lWWkhUWGRVVjNCT1RXMWFSazVWV2xkTk0yTTVaa1JWZWs1VVVUQk9hazB6VFhwamVVNTZZM2RPZW1keFVqRkdUVXR1ZUd4TlYwcHNUMWRhYWsxNlVUSk5SR2N4V1RKTk1FNVVVVEJPZW14dFdrUkJOVTVYUlRSWmJWa3hXa1JvYWs1VVdUUk5la0pwV2tkUmQwMXRUVEZOVjFVeVQwUm5kMXBxUlRWTmVrMHdUakpWTVZsWFJteG1SVFZHVmpOM1BRPT18VUhvNVZrMUVhSEJSTWpWSFZGaFZkMlI2TVdaT1ZFVTBXSGt3ZUdaRVZYcE9WRkV3VG1wTk0wMTZZM2xPZW1OM1RucG5jVkl4UmsxTGJuZDRXWHBCZUU5VVkzcE5lbXN3V1ZSbk5VMUhTbWhaYW1Sc1dsUlplRTVVYXpKWlZHUnRUbFJuTlU1cVpHMU5WRkV5V2tSS2EwNHlWbWxQUkdzeldWUlpOVnB0VlROUFJGcHFUMVJKTlZwVVdURlBSRVV3WmtVMVJsWXpkejA9fE5vbmV8NTM1NDQ2MzczNzI3NzA3OCpHUUwqfDcxYjNmN2JlMzkxNmJlMTMwNGVmNmQ3NWYzZjZlMTI5YzFiZjU2YzQ2NDRlMTQ4ZWJkNTc4NjA4OTNjYzRmOTN8TkVXfA%3D%3D%22%5D%7D%2C%22context%22%3A%7B%7D%7D",
//   method: "POST",
// });

// Promise.all([p1])
//   .then((responses) => {
//     return Promise.all(
//       responses.map((response) =>
//         response
//           .json()
//           .then(
//             (data) =>
//               data.resource_response.data?.results?.map(
//                 (item) => item?.images?.orig?.url
//               ) || []
//           )
//       )
//     ).then((data) => Array.from(new Set(data.flat())));
//   })
//   .then((data) => {
//     downloadAll(data);
//   });
