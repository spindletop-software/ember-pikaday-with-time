module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return this.addBowerPackageToProject('pikaday-time').then(function() {
        return that.addBowerPackageToProject('moment');
    });
  }
};
