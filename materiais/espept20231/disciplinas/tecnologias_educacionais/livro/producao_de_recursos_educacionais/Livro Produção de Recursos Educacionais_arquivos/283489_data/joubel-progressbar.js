var H5P=H5P||{};H5P.JoubelProgressbar=(function($){function JoubelProgressbar(steps,options){H5P.EventDispatcher.call(this);var self=this;this.options=$.extend({progressText:'Slide :num of :total'},options);this.currentStep=0;this.steps=steps;this.$progressbar=$('<div>',{'class':'h5p-joubelui-progressbar'});this.$background=$('<div>',{'class':'h5p-joubelui-progressbar-background'}).appendTo(this.$progressbar);}
JoubelProgressbar.prototype=Object.create(H5P.EventDispatcher.prototype);JoubelProgressbar.prototype.constructor=JoubelProgressbar;JoubelProgressbar.prototype.updateAria=function(){var self=this;if(this.options.disableAria){return;}
if(!this.$currentStatus){this.$currentStatus=$('<div>',{'class':'h5p-joubelui-progressbar-slide-status-text','aria-live':'assertive'}).appendTo(this.$progressbar);}
var interpolatedProgressText=self.options.progressText.replace(':num',self.currentStep).replace(':total',self.steps);this.$currentStatus.html(interpolatedProgressText);};JoubelProgressbar.prototype.appendTo=function($container){this.$progressbar.appendTo($container);};JoubelProgressbar.prototype.setProgress=function(step){if(step>this.steps||step<0){return;}
this.currentStep=step;this.$background.css({width:((this.currentStep/this.steps)*100)+'%'});this.updateAria();};JoubelProgressbar.prototype.next=function(){this.setProgress(this.currentStep+1);};JoubelProgressbar.prototype.reset=function(){this.setProgress(0);};JoubelProgressbar.prototype.isLastStep=function(){return this.steps===this.currentStep;};return JoubelProgressbar;})(H5P.jQuery);