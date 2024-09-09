import aiohttp
import asyncio
import os
from aiohttp import ClientTimeout
from tqdm import tqdm

# 设置并发数和超时
MAX_CONCURRENCY = 10
TIMEOUT = 30

async def download_image(session, semaphore, url, filename):
    async with semaphore:
        try:
            async with session.get(url, timeout=ClientTimeout(total=TIMEOUT)) as response:
                if response.status == 200:
                    content = await response.read()
                    with open(filename, 'wb') as file:
                        file.write(content)
                    return True
                else:
                    print(f"Failed to download {url}: HTTP {response.status}")
                    return False
        except Exception as e:
            print(f"Error downloading {url}: {str(e)}")
            return False

async def download_all(images):
    semaphore = asyncio.Semaphore(MAX_CONCURRENCY)
    async with aiohttp.ClientSession() as session:
        tasks = [download_image(session, semaphore, img['url'], img['filename']) for img in images]
        results = []
        for f in tqdm(asyncio.as_completed(tasks), total=len(tasks), desc="Downloading"):
            results.append(await f)
    
    success = sum(results)
    print(f"Downloaded {success} out of {len(images)} images successfully.")

imgs = [
    "https://i.pinimg.com/originals/6c/96/b6/6c96b6c05c415bada28ffbd5e79c4a7f.jpg",
    "https://i.pinimg.com/originals/d5/9c/59/d59c59d302ddaa2ce03a15384b41baa8.jpg",
    "https://i.pinimg.com/originals/84/05/3c/84053c1d267b2a21e02e4fc86859a2e6.jpg",
    "https://i.pinimg.com/originals/12/cc/05/12cc05bd2a34beed40b4ec2573ff88df.jpg",
    "https://i.pinimg.com/originals/f3/a3/4d/f3a34df72107db9c6147bd2c944ce564.jpg",
    "https://i.pinimg.com/originals/47/71/3a/47713ad661e41ee6ae6948c6552ef400.jpg",
    "https://i.pinimg.com/originals/70/58/32/70583207d95964380f4c48559f21d8e3.jpg",
    "https://i.pinimg.com/originals/49/59/8b/49598bd4d4957684ce9768679248ffe1.jpg",
    "https://i.pinimg.com/originals/63/6c/52/636c5294a00feef29e8819e9011c21c3.jpg",
    "https://i.pinimg.com/originals/aa/ac/12/aaac121c3f94d900702a8d3463a38719.jpg",
    "https://i.pinimg.com/originals/49/1d/88/491d8877fa770b8cb4205b23819dda4a.jpg",
    "https://i.pinimg.com/originals/3e/c5/72/3ec5721f53664b968936d33e33068164.jpg",
    "https://i.pinimg.com/originals/20/47/71/204771ad62fb295c3a58c4a89ede49bc.jpg",
    "https://i.pinimg.com/originals/e3/61/ef/e361ef677594cdfee0a96b6b385ca564.jpg",
    "https://i.pinimg.com/originals/3e/f3/56/3ef3568fc6dbc7956a397da5aa900da2.jpg",
    "https://i.pinimg.com/originals/4d/5c/40/4d5c4083aa8b20b7a022101375465e0b.jpg",
    "https://i.pinimg.com/originals/75/b5/83/75b583db459e5380e23120ca8f79c57b.jpg",
    "https://i.pinimg.com/originals/3c/38/07/3c380714e0066654e04a045f11b536fb.jpg",
    "https://i.pinimg.com/originals/0f/4c/87/0f4c87b0e2103d5dbf8d3cfcd027e2da.jpg",
    "https://i.pinimg.com/originals/e2/64/cb/e264cb5f4b5a0398bd09e05cc7b0588f.jpg",
    "https://i.pinimg.com/originals/40/de/9e/40de9e0f88eae2d0e3a63b65ec620176.jpg"
]

# 使用示例
images = [
    {"url": "https://example.com/image1.jpg", "filename": "image1.jpg"},
    {"url": "https://example.com/image2.jpg", "filename": "image2.jpg"},
    # ... 更多图片
]

asyncio.run(download_all(images))
