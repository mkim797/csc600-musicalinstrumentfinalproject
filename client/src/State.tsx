// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { DrumInstrument } from './instruments/Drum';
import { HarpInstrument } from './instruments/Harp';
import { GuitarInstrument } from './instruments/mkim797';
import { XylophoneInstrument } from './instruments/arianna-y';
import { WaveformVisualizer } from './visualizers/Waveform';
import { Jiji14Visualizer } from './visualizers/Jiji14';
import { terrainVisualizer } from './visualizers/mkim797';
import { marshmallowVisualizer } from './visualizers/marshmallow';
import { barGraphVisualizer } from './visualizers/arianna-y';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, DrumInstrument, HarpInstrument, GuitarInstrument, XylophoneInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, Jiji14Visualizer, marshmallowVisualizer, terrainVisualizer, barGraphVisualizer]);    // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});