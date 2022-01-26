module.exports = app => {
    app.route('/')
        .get(app.api.generic.getGeneric)
        .post(app.api.generic.postGeneric)
}