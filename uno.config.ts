// uno.config.ts
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx"
import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: "inline-block", "vertical-align": "middle" },
    }),
  ],
  transformers: [transformerAttributifyJsx()],
})
