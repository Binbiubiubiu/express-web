exports.showIndex = function (req, res) { 
    var data = {};
    res.render('pages/index',data)
}

// 健康检查
exports.showHealth = function (req,res) {
    var t = new Date().getTime();
    res.send(t+'');
};