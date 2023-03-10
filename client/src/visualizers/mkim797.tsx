// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const terrainVisualizer = new Visualizer(
  'Terrain',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    // p5.strokeWeight(dim * 0.002);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    console.log(values);
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      // p5.strokeWeight(Math.abs(amplitude) * 350 + (dim * 0.01));
      const x = p5.map(i, 0, (values.length-1), width, width*3);
      const y = height/2 + amplitude * height;
      p5.stroke(127+y*100, 10, 10, 255);
      p5.strokeWeight(Math.abs(amplitude)*5 + (dim * 0.001));
      p5.line((x-width*1.5), (height*0.7+y*0.2), (x*0.2), (y*0.6));
    }
    p5.endShape();
  },
);
