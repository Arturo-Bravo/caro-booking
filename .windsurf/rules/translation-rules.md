# Translation System Rules

## File Structure
- Translation files are located in the `/messages` directory
- English translations: `en.json`
- Spanish translations: `es.json`

## Implementation
- Import translations using: `import * as m from '$lib/paraglide/messages.js'`
- Use in components: `{m.translation_key_here()}`
- Example: `{m.booking_form_submit()}`

## Naming Conventions
- Format: `[component]_[element]_[type]`
- Examples:
  - `booking_form_submit`
  - `booking_form_date_label`
  - `navbar_home_link`

## Best Practices
1. Always add translations to both language files
2. Keep related translations grouped by component/feature
3. Use clear, descriptive keys that indicate their purpose
4. Maintain consistent naming patterns
5. Update both language files simultaneously

## Framework Details
- Uses `@inlang/paraglide-sveltekit`
- Supports dynamic language switching
- Client-side translations with no page reload
- Type-safe translation keys
