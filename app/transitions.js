export default function(){
  this.transition(
    this.fromRoute('settings.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('settings.setting.show'),
    this.toRoute('settings.setting.edit'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.hasClass('high-level'),
    this.toValue(false),
    this.use('fade', {duration: 1000}),
    this.reverse('toDown', {duration: 1000})
  );
  this.transition(
    this.hasClass('liquid-setting'),
    this.use('explode', {
      pick: '.level',
      use: 'toUp'
    },{
      pickNew: '.name',
      use: 'toRight'
    },{
      pickOld: '.name',
      use: 'toLeft'
    }, {
      use: ['fade', {duration: 500}]
    })
  );
}
