-- 2D Collision-detection library
local bump = require 'lib.bump'

-- Tween animation library
local tween = require 'lib.tween'

-- create a lua table with x/y and image data
local squareInfo = { x = 32, y = 32, img = nil }

-- create a tween to move x and y to 256,256 over 4 seconds
local squareTween = tween.new(4, squareInfo, {x=256, y=256}, tween.easing.inOutCubic)

-- load our image data and put it in our table
function love.load()
  squareInfo.img = love.graphics.newImage('asset/img/16x16SquareSheet.png')
end

-- every frame, update our tween
function love.update(delta)
  squareTween:update(delta)
end

-- every frame, draw the image data at the position listed by the table
function love.draw()
  love.graphics.draw(squareInfo.img, squareInfo.x, squareInfo.y)
end