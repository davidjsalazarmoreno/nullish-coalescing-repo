const courseSettings = {
  id: 4,
  name: 'Javascript Course',
  author: 'CraftingCode',
  shortname: '',
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

console.group(`Usando short circuit con el operador lógico ó usar desestructurado  con valores por defecto.`)
  console.log(productName)
  console.log(name)
console.groupEnd()

/**
 * Valores que pueden ser malinterpretados
 */
/**
 * courseSettings.shortname ('') evalua false pero
 * ¿Y si lo que quiero es obtener es la cadena vacia?
 */
const shortname = courseSettings.shortname || 'No short Name'
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


console.group('Valores que pueden ser malinterpretados.')
  console.log('shortname es ' + shortname + ' ,¿Y si lo que quiero es obtener es la cadena vacia?' )
  console.log('discountNumber es '+ discountNumber + ', ¿Y si lo que quiero es obtener el número 0?' )
  console.log('showPublictly es '+ showPublictly + ', ¿Y si lo que quiero es obtener el valor false?' )
console.groupEnd()


/**
 * Ej, Nullish Coalescing Operator (??) - ESNext - Bits
 */

const courseShortname = courseSettings.shortname ?? 'No short Name'
const discount = courseSettings.discount ?? 10
const published = courseSettings.showPublictly ?? true

console.group('Ej, Nullish Coalescing Operator (??) - ESNext - Bits.')
  console.log(`courseShortname es una cadena vacia '${courseShortname}'`)
  console.log('discount es '+ discountNumber)
  console.log('published es '+ published)
console.groupEnd()



/**
 * Ej 2, Optional Chaining (?) + Nullish Coalescing Operator (??) - ESNext - Bits.
 */
const courseCategory = courseSettings?.category?.name ?? 'General'

console.group('Optional Chaining (?) + Nullish Coalescing Operator (??) - ESNext - Bits.')
  console.log(`courseCategory es ${courseCategory}`)
console.groupEnd()
