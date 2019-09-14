const courseSettings = {
  id: 4,
  name: 'Javascript Course',
  author: 'CraftingCode',
  shortName: '',
  discount: 0,
  showPublictly: false,
  price: 100,
  chapters: {
    basic: [
      {
        title: 'Hello World'
      }
    ],
    intermediate: [
      {
        title: 'Closures'
      }
    ]
  }
}

// Usando short circuit con el operador lógico ||
// ó usar desestructurado  con valores por defecto.
const productName = courseSettings.name || 'Unamed Product'
const { name = 'Unamed Product' } = courseSettings

/**
 * Valores que pueden ser malinterpretados
 */
/**
 * courseSettings.shortName ('') evalua false pero
 * ¿Y si lo que quiero es obtener es la cadena vacia?
 */
const shortName = courseSettings.shortName || 'No short Name'
/**
 * courseSettings.discount (0) evalua a false pero
 * ¿Y si lo que quiero es obtener el número 0?
 */
const discountNumber = courseSettings.discount || 10
/**
 * courseSettings.discount (false) evalua a false pero
 * ¿Y si lo que quiero es obtener el valor false?
 */
const showPublictly = courseSettings.showPublictly || true

/**
 * Ej, Nullish Coalescing Operator (??) - ESNext - Bits
 */

