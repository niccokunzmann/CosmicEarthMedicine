#
# See https://github.com/devcows/hugo-universal-theme/issues/423
#
from PIL import Image
import numpy as np

def rgb(r,g, b):
    return np.array((r, g, b))

# this numbers here are the primary color of the pink theme
primary_color = rgb(166, 123, 91)

# make brighter
#primary_color = primary_color * 256 / max(primary_color)

im_frame = Image.open('themes/hugo-universal-theme/static/img/texture-bw.png')
np_frame = np.array(im_frame)
b = (np_frame * np.array(primary_color/256)//1).astype(np.uint8)
im = Image.fromarray(b)
im.save("static/img/texture-bw.png")
