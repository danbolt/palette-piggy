local width = 10
local height = 10
local map = {}

for i=1,width do
  map[i] = {}
  for j=1,height do
    map[i][j] = nil
  end
  
end


local myModule = {}
function myModule.get (x, y)
  return map[y][x]
end

function myModule.set (x, y, value)
  map[y][x] = value
end

function myModule.draw(tileImage)
  love.graphics.setColor(255, 255, 255)
  for mapx=1,width do
    for mapy=1,height do
     local tile = myModule.get(mapx,mapy)
     if tile == "red" then 
      love.graphics.draw(tileImage, mapx * 32, mapy * 32) 
    end
   end
 end
end

 
return myModule 