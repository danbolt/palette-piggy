local myModule = {}

local map1 = {{ 0,0,0,0,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,1,0,0 },
              { 0,0,1,1,0,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,1,1,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,0,0,0,1,0,0,0 },
              { 0,1,0,0,1,1,1,0,0,0 },
              { 0,0,1,1,0,0,0,0,0,0 },
              { 1,1,1,1,1,1,1,1,1,1 }}
            
local map2 = {{ 0,0,0,0,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,1,0,0 },
              { 0,0,1,1,0,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,1,1,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,0,0,0,1,0,0,0 },
              { 0,1,0,0,1,1,1,0,0,0 },
              { 0,0,1,1,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,0,0,0 }}
            
local map4 = {{ 0,0,0,0,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,1,0,0 },
              { 0,0,1,1,0,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,1,1,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,0,0,0,1,0,0,0 },
              { 0,1,0,0,1,1,1,0,0,0 },
              { 0,0,1,1,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,0,0,0 }}
            
local map3 = {{ 0,0,0,0,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,1,0,0 },
              { 0,0,1,1,0,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,1,1,0,1,0,0,0 },
              { 0,0,0,1,0,0,1,0,0,0 },
              { 0,0,0,0,0,0,1,0,0,0 },
              { 0,1,0,0,1,1,1,0,0,0 },
              { 0,0,1,1,0,0,0,0,0,0 },
              { 0,0,0,0,0,0,0,0,0,0 }}
      
local maps = {}
maps["red"] = map1
maps["blue"] = map2
maps["yellow"] = map3
maps["green"] = map4

function myModule.getMapWidth(mapKey)
 local map = maps[mapKey]
 return #(map[1])
end

function myModule.getMapHeight(mapKey)
 local map = maps[mapKey]
 return #map
end

function myModule.getTileAt(mapKey, x, y)
 local map = maps[mapKey]
 
 return map[y][x] == 1
end

return myModule