const fetchColor = (musicStyle: string, ctx: any) => {
  fetch(`http://127.0.0.1:3333/api/music-style/${musicStyle}`)
    .then(res => res.json())
    .then(musicStyleState => {
      ctx.setState({ color: musicStyleState.color });
    });
};

export default fetchColor;
