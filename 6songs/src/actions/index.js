// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',//type is mandatory here 
    payload: song //this dynamic that will pass but is not mandatory
  };
};
