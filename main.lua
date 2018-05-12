-- 2D Collision-detection library
local bump = require 'lib.bump'

-- Tween animation library
local tween = require 'lib.tween'

-- image data
local imageData = { redSquare = nil }

-- load our image data and put it in our table
function love.load()
  imageData.redSquare = love.graphics.newImage('asset/img/square_red.png')
end

-- every frame, update our tween
function love.update(delta)
  --
end

-- every frame, draw the image data at the position listed by the table
function love.draw()
  love.graphics.draw(imageData.redSquare, 32, 100)
end