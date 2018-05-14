-- End box
local endBox = {x=20*32, y=2*32, w=32, h=32}

endBox.draw = function()
  love.graphics.push()
  
  local move = love.math.newTransform()
  move:translate(endBox.x + 16, endBox.y + 16)
  love.graphics.applyTransform(move)
  
  local rotate = love.math.newTransform()
  rotate:rotate(love.timer.getTime() * 8)
  love.graphics.applyTransform(rotate)
  
  local r = math.sin(love.timer.getTime() * 4 ) * 0.2 + 0.8
  local g = math.sin(love.timer.getTime() * 4 + 2) * 0.2 + 0.8
  local b = math.sin(love.timer.getTime() * 4 + 4) * 0.2 + 0.8
  
  love.graphics.setColor(r, g, b)
  love.graphics.rectangle("fill", -8, -8, 16, 16)
  
  love.graphics.pop()
end


return endBox