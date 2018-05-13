-- End box
local endBox = {x=20*32, y=2*32, w=32, h=32}

local function drawBox(endBox, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", endBox.x, endBox.y, endBox.w, endBox.h)
end

endBox.draw = function()
  drawBox(endBox, 0, 0, 255)
end


return endBox