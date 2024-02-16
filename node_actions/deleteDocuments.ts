import sanityClient from '@sanity/client'
import {Transaction} from '@sanity/client'

const client = sanityClient({
  projectId: '6zr8au58',
  dataset: 'production',
  token:
    'skrg8balIw8EbPIQ1MPvDu95h4p8cd0RBbbvQBQKLXXMB1FPMU5mxpPlkRoG0WIbP4NAme9wV4wOuZheRcXpfmYULuu4Hg1lrFaBpcCulN6J6J3o429IUoJLWnGhwAuqJ2ca4QrLTAkeRpyyx2IokAnZH6aHl2uE3EUd7QcZYgcQM5u33exE', // Asegúrate de que este token tenga permisos para borrar documentos.
  apiVersion: '2022-03-07', // Usa una fecha reciente para asegurarte de que usas la última API.
  useCdn: false,
})

interface UserDocument {
  _id: string
}

async function deleteDocuments() {
  // Realiza una consulta para obtener los documentos a eliminar.
  const query = "*[_type == 'person']"
  const documents: UserDocument[] = await client.fetch(query)

  if (documents.length > 0) {
    // Crea una transacción para eliminar todos los documentos encontrados.
    const transaction = documents.reduce(
      (tx: Transaction, doc: UserDocument) => tx.delete(doc._id),
      client.transaction(),
    )

    // Ejecuta la transacción.
    transaction
      .commit()
      .then(() => {
        console.log(`Se han eliminado ${documents.length} documentos.`)
      })
      .catch((err: Error) => {
        console.error('Error al eliminar documentos:', err.message)
      })
  } else {
    console.log('No se encontraron documentos para eliminar.')
  }
}

// Ejecuta la función principal para eliminar documentos.
deleteDocuments().catch((error) => {
  console.error('Failed to delete documents:', error)
})
