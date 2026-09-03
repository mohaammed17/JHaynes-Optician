"""Create web-ready WebP copies of the site's source images.

The original files are intentionally kept as editable masters. Run this script again
after replacing any of them to refresh the optimized copies used by the website.
"""

from pathlib import Path

from PIL import Image


ASSETS = Path(__file__).resolve().parents[1] / "src" / "assets"

# filename: (maximum width, WebP quality, lossless)
IMAGES = {
    "logo.bmp": (602, 90, True),
    "j-haynes-logo.png": (900, 90, False),
    "Annexsyslogo.png": (320, 88, True),
    "background.png": (1200, 80, False),
    "slide1.png": (1200, 82, False),
    "homevisitng.png": (1600, 82, False),
    "slide3.jpg": (1200, 84, False),
    "mustafa-eye.jpeg": (1600, 84, False),
    "bluelock.jpeg": (1100, 82, False),
    "photofun.jpeg": (900, 82, False),
    "safetywear.png": (1536, 82, False),
    "audiologist.jpg": (1600, 82, False),
    "slide2.png": (900, 82, False),
    "img1.jpg": (1000, 84, False),
    "mustafa-kid.jpeg": (1000, 84, False),
    "contactlens.png": (900, 84, False),
    "lenses.png": (770, 84, False),
    "dispensingjounrey.png": (900, 84, False),
    "eyeexam.png": (900, 84, False),
    "Flashes.png": (800, 84, False),
    "macular.png": (800, 84, False),
    "diabetic.png": (800, 84, False),
    "Hypermetropia.png": (1000, 84, False),
    "Myopia.png": (1000, 84, False),
    "Astigmatism.png": (1000, 84, False),
    "Presbyopia.png": (1000, 84, False),
    "Anisometropia.png": (1000, 84, False),
}


def optimize(filename: str, max_width: int, quality: int, lossless: bool) -> None:
    source = ASSETS / filename
    destination = source.with_suffix(".webp")

    with Image.open(source) as image:
        image.load()
        if filename == "j-haynes-logo.png":
            alpha = image.getchannel("A")
            visible_alpha = alpha.point(lambda value: 255 if value > 8 else 0)
            alpha_bounds = visible_alpha.getbbox()
            if alpha_bounds:
                image = image.crop(alpha_bounds)

        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)

        save_options = {"format": "WEBP", "method": 6, "lossless": lossless}
        if not lossless:
            save_options["quality"] = quality
        image.save(destination, **save_options)

    original_kb = source.stat().st_size / 1024
    optimized_kb = destination.stat().st_size / 1024
    print(f"{filename:28} {original_kb:8.1f} KB -> {optimized_kb:8.1f} KB")


if __name__ == "__main__":
    for name, settings in IMAGES.items():
        optimize(name, *settings)
