import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { MODELS } from '@/data/models'

async function testStreaming() {
    // boilerplate from 'https://ai-sdk.dev/docs/foundations/streaming'
    const { textStream } = streamText({
        model: openai(MODELS.openai.fast),
        prompt: 'Write a poem about embedding models.',
    })

    for await (const textPart of textStream) {
        console.log(textPart)
    }
}

testStreaming()

// Embedding
//  models

// In
//  the
//  hush
//  of
//  data
// ,
//  vectors
//  spr
// out
//  like
//  seeds
//  in
//  rain
// ,

// words
//  loosen
//  into
//  coordinates
// ,
//  a
//  map
//  where
//  meanings
//  grain
// .

// A
//  term
//  becomes
//  a
//  thread
//  of
//  numbers
// ,
//  stitched
//  through
//  many
//  years
// ;

// each
//  dimension
//  holds
//  a
//  memory
// ,
//  each
//  axis
//  learns
//  to
//  care
// .

// A
//  word
// —
// once
//  a
//  label
// —
// spl
// its
//  into
//  a
//  constellation
//  light
// ,

// components
//  tw
// ined
//  with
//  context
// ,
//  turning
//  day
//  to
//  layered
//  night
// .

// Cos
// ine
//  becomes
//  a
//  compass
// ,
//  pointing
//  toward
//  the
//  neighbor
//  near
// ,

// where
//  synonyms
//  mingle
//  softly
// ,
//  where
//  shy
//  anton
// y
// ms
//  disappear
// .

// From
//  corridors
//  of
//  text
// ,
//  a
//  model
//  gathers
//  scent
//  and
//  sound
// ,

// training
//  on
//  chapters
// ,
//  tweets
// ,
//  code
// ,
//  where
//  patterns
//  drift
//  around
// .

// Word
// 2
// vec
//  and
//  G
// lo
// Ve
//  hum
//  low
// ,
//  while
//  transformers
//  ascend
// ,

// embedding
//  every
//  token
//  in
//  a
//  space
//  where
//  sense
//  and
//  symbols
//  blend
// .

// Sub
// spaces
//  bloom
//  like
//  rooms
//  in
//  a
//  library
//  of
//  thought
// ,

// where
//  analog
// ies
//  walk
//  the
//  hall
// ways
//  and
//  learned
//  distances
//  are
//  taught
// .

// T
// -S
// NE
//  and
//  U
// MAP
//  whisper
// ,
//  asking
//  the
//  high
// -D
//  to
//  be
//  mild
// ,

// to
//  sketch
//  the
//  vast
//  interior
//  in
//  a
//  portrait
//  that
// ’s
//  reconc
// iled
// .

// Emb
// eddings
//  are
//  memory
//  pressed
//  into
//  geometry
// ,

// a
//  map
//  without
//  a
//  map
// maker
// ,
//  a
//  cart
// ography
//  of
//  possibility
// .

// Fine
// -t
// uning
//  til
// ts
//  the
//  axis
// ,
//  nud
// ges
//  the
//  peat
//  of
//  meaning
// ,

// and
//  suddenly
//  near
//  and
//  far
//  adjust
//  to
//  a
//  new
//  life
// ’s
//  leaning
// .

// So
//  we
//  wander
//  these
//  vector
//  seas
// ,
//  where
//  language
//  softly
//  sings
// ,

// finding
//  kin
// ship
//  in
//  the
//  numbers
//  that
//  language
//  lovers
//  bring
// .
