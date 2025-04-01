import random

PHOTOS: list[str] = [
    "https://masterpiecer-images.s3.yandex.net/7e89c2525b6711eeb284badf81d486ab",
    "https://a.d-cd.net/c579b1ds-960.jpg",
    "https://avatars.mds.yandex.net/i?id=0773b436faabc810478c8a620bd918bc_l-5287630-images-thumbs&n=13",
]

async def get_random_photo() -> str:
        return random.choice(PHOTOS)