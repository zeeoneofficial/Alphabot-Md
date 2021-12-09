const brainly = require('../index');

describe('Brainly Scraper TDD', function(){
    this.timeout(120000);
    it('Blank Parameter', function(done){
        brainly().then(res => {
            if (res.message !== "Param cant be blank") done(res);
            done();
        });
    });
    it('Simple Usage', function(done) {
        brainly("nkri", 5).then(res => {
            if (res.length !== 5) done("Length is not match");
            done();
        }).catch(error => {
            done(error);
        });
    });
    it('Test Limit', async () => {
        for (let i=0;i<20;i++){
            await brainly("nkri").then(res => {
                if (res.length === 0) return res;
            });
        }
    });
});
