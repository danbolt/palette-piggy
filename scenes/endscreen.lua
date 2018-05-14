local endScreen = {menu = nil}

local function drawDecorationCircles()
  local radius = 48
  local yTop = 0
  local yBottom = love.graphics.getHeight()
  local offset = ((love.timer.getTime() * 30) % (radius * 2.5))
  local spacing = radius * 2.5
  love.graphics.setColor(1, 1, 1, 0.4)
  for i=-2,(math.floor(love.graphics.getWidth() / radius)) do
    local horizontalSpot = i * spacing + offset
    love.graphics.circle("fill", horizontalSpot, yTop, radius)
    love.graphics.circle("fill", horizontalSpot, yBottom, radius)
  end
end

function endScreen:draw()
  drawDecorationCircles()
  
  love.graphics.setColor(1,1,1,1)
  love.graphics.printf("You win, kid!", 0, love.graphics.getHeight() / 2 - 25, love.graphics.getWidth(), 'center')
end

function endScreen:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(endScreen.menu)
    end
end

return endScreen