-- End box
local endBox = {x=20*32, y=2*32, w=32, h=32}

endBox.draw = function()
  love.graphics.setColor(0, 0, 255)
  love.graphics.rectangle("fill", endBox.x, endBox.y, endBox.w, endBox.h)
end


return endBox