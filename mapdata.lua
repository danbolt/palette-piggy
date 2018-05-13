
local sti = require "lib.sti"

local myModule = {}

local map1 = {{ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 },
              { 1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1 },
              { 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 }}
            
local map2 = {{ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 },
              { 1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0 }}
            
local map4 = {{ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 },
              { 1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0 }}
            
local map3 = {{ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 },
              { 1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0 },
              { 1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0 }}
      
local maps = {}
maps["red"] = map1
maps["blue"] = map2
maps["yellow"] = map3
maps["green"] = map4

local loadLevel = function(mapName)
  local map = sti("asset/map/" .. mapName .. ".lua")
  
  local fill = function(key, id)
    for x=1,myModule.getMapWidth(key) do
      for y=1,myModule.getMapHeight(key) do
        local foo = map:getTileIndex(key, x, y)
        if foo ~= nil then
          if foo.id == id then
            maps[key][y][x] = 1
          end
        else
          maps[key][y][x] = 0
        end
      end
    end
  end
  
  fill('red', 0)
  fill('blue', 1)
  fill('yellow', 2)
  fill('green', 3)
end

function myModule.loadLevel(mapName)
  local foo = loadLevel(mapName)
end

function myModule.getMapWidth(mapKey)
 local map = maps[mapKey]
 return #(map[1])
end

function myModule.getMapHeight(mapKey)
 local map = maps[mapKey]
 return #map
end

function myModule.getTileAt(mapKey, x, y)
  -- If we are outside the bounds of the map, return false
  if x < 1 or y < 1 or x > myModule.getMapWidth(mapKey) or y > myModule.getMapHeight(mapKey) then
    return false
  end
  
  
 local map = maps[mapKey]
 
 return map[y][x] == 1
end

return myModule