--Start Position
function love.load()
  x=5
  y=400
end
function love.update(dt)
  if love.keyboard.isDown("right") then
    x = x + 1
  elseif love.keyboard.isDown("up") then
    y = y + 1
  end
end

function love.draw()
  love.graphics.setColor(0, 0, 255)
  love.graphics.rectangle("fill", x, 400, 20, 20)
end

  