-- End box
local endBox = {x=750, y=100, w=32, h=32}

local function drawBox(endBox, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", 768, 95, 32, 32)
end

endBox.draw = function()
  drawBox(endBox, 0, 0, 255)
end


return endBox