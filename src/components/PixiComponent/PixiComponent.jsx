import React, { useEffect, useRef } from 'react';
import {
  Application,
  Assets,
  Sprite,
  Graphics,
  SCALE_MODES,
  Rectangle,
  BlurFilter,
} from 'pixi.js';

const PixiComponent = ({ image }) => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    const initPixi = async () => {
      // Check if the pixiContainer already has a canvas element
      if (pixiContainer.current && pixiContainer.current.children.length > 0) {
        return;
      }

      // Create a new application
      const app = new Application({
        backgroundColor: 0x0c0c1d, // Set the background color to #0C0C1D
      });

      // Append the application canvas to the pixiContainer
      pixiContainer.current.appendChild(app.view);

      // Inner radius of the circle
      const radius = 100;

      // The blur amount
      const blurSize = 32;

      // Load the image texture
      const imageTexture = await Assets.load(image);

      // Create the image background
      const background = new Sprite(imageTexture);

      app.stage.addChild(background);
      background.width = app.screen.width;
      background.height = app.screen.height;

      const circle = new Graphics()
        .beginFill(0xff0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();

      circle.filters = [new BlurFilter(blurSize)];

      const bounds = new Rectangle(
        0,
        0,
        (radius + blurSize) * 2,
        (radius + blurSize) * 2
      );
      const texture = app.renderer.generateTexture(circle, {
        scaleMode: SCALE_MODES.NEAREST,
        resolution: 1,
        frame: bounds,
      });
      const focus = new Sprite(texture);

      app.stage.addChild(focus);

      background.mask = focus;

      app.stage.eventMode = 'static';
      app.stage.hitArea = app.screen;
      app.stage.on('pointermove', (event) => {
        focus.position.x = event.global.x - focus.width / 2;
        focus.position.y = event.global.y - focus.height / 2;
      });
    };

    initPixi();
  }, []);

  return <div ref={pixiContainer} style={{ width: '100%', height: '100%' }} />;
};

export default PixiComponent;
