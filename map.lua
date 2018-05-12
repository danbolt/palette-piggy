local width = 10
local height = 10
local map = {}

for i=1,width do
  map[i] = {}
  for j=1,height do
    map[i][j] = nil
  end
  
end


local mymodule = {}
function mymodule.get (x, y)
  return map[y][x]
end

function mymodule.set (x, y, value)
  map[y][x] = value
end

return mymodule 