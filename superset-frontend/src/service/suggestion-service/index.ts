class SuggestionServiceClass {
  public getSuggestions() {
    // for (const slice of Object.values(rootState.sliceEntities.slices)) {
    //   const r = await SupersetClient.post({
    //     url: (slice as any).slice_url.replace('explore', 'explore_json'),
    //     method: 'POST',
    //     jsonPayload: {
    //       filters: [
    //         {
    //           val: ['Phillip'],
    //           op: 'IN',
    //           col: 'name',
    //         },
    //       ],
    //     },
    //   });
    // }
  }
}

// async function getOptions(key: string, inputValue: string) {
//   const input = inputValue.toLowerCase();
//   // const sortAsc = this.props.filtersFields.find(x => x.key === key).asc;
//   const formData = {
//     // ...this.props.rawFormData,
//     adhoc_filters: inputValue
//       ? [
//           {
//             clause: 'WHERE',
//             expressionType: 'SIMPLE',
//             subject: key,
//             operator: 'ILIKE',
//             comparator: `%${input}%`,
//           },
//         ]
//       : null,
//   };

//   const { json } = await SupersetClient.get({
//     url: getExploreUrl({
//       formData,
//       endpointType: 'json',
//       method: 'GET',
//     }),
//   });
//   const options = (json?.data?.[key] || []).filter((x: any) => x.id);
//   if (!options || options.length === 0) {
//     return [];
//   }
//   return options;
//   // if (input) {
//   //   // sort those starts with search query to front
//   //   options.sort((a, b) => {
//   //     const labelA = a.id.toLowerCase();
//   //     const labelB = b.id.toLowerCase();
//   //     const textOrder = labelB.startsWith(input) - labelA.startsWith(input);
//   //     return textOrder === 0
//   //       ? (a.metric - b.metric) * (sortAsc ? 1 : -1)
//   //       : textOrder;
//   //   });
//   // }
// }

const SuggestionService = new SuggestionServiceClass();
