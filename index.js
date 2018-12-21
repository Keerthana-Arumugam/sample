// const bulkIndex = function bulkIndex(index, type, data) {
//     let bulkBody = [];
  
//     data.forEach(item => {
//       bulkBody.push({
//         index: {
//           _index: index,
//           _type: type,
//           _id: item.id
//         }
//       });
  
//       bulkBody.push(item);
//     });
  
//     esClient.bulk({body: bulkBody})
//     .then(response => {
//       console.log('here');
//       let errorCount = 0;
//       response.items.forEach(item => {
//         if (item.index && item.index.error) {
//           console.log(++errorCount, item.index.error);
//         }
//       });
//       console.log(
//         `Successfully indexed ${data.length - errorCount}
//          out of ${data.length} items`
//       );
//     })
//     .catch(console.err);
//   };
  
//   const test = function test() {
//     const articlesRaw = fs.readFileSync('data.json');
//     bulkIndex('library', 'article', articles);
//   };

client.indices.create({index: 'files'})
.then(() => {
    // create a mapping for the attachment
    return elastic.client.indices.putMapping({
        index: 'files',
        type: 'document',
        body: {
            document: {
                properties: {
                    file: {
                        type: 'attachment',
                        fields: {
                            content: {
                                type: 'string',
                                term_vector: 'with_positions_offsets',
                                store: true
                            }
                        }
                    }
                }
            }
        }
    });
});
