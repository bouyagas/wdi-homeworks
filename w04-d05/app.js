app.get("/wordmaker/:word1/:word2", function(req, res) {
  let w1 = req.params.word1;
  let w1 = req.params.word2;
  let result = w1 + w2;
  res.render('wordmaker', { newword: result });
});
