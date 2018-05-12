-- 2D Collision-detection library
local bump = require 'lib.bump'

-- Tween animation library
local tween = require 'lib.tween'

local map = require 'map'

-- image data
local imageData = { redSquare = nil }

map.set (2, 4, "red")
map.set (1, 9, "red")
map.set (6, 7, "red")
map.set (3, 6, "red")


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
  for x=1,10 do
    for y=1,10 do
     local tile = map.get(x,y)
     if tile == "red" then love.graphics.draw(imageData.redSquare, x * 32, y * 32) end
   end
 end
 
     
     
end