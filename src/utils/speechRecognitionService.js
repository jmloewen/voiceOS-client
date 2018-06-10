var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService() {
        var _this = this;
        this.onResult = function (callback) {
            _this.recognition.onresult = function (event) {
                if (!event.results) {
                    return;
                }
                var lastResult = event.results[event.results.length - 1];
                if (!lastResult.isFinal) {
                    callback('...', false);
                    return;
                }
                callback(lastResult[0].transcript, true);
            };
        };
        this.onEnd = function (callback) {
            _this.recognition.onend = function () { return callback(); };
        };
        this.start = function () {
            _this.recognition.start();
        };
        this.stop = function () {
            _this.recognition.stop();
        };
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        this.recognition.maxAlternatives = 1;
    }
    return SpeechRecognitionService;
}());
export default SpeechRecognitionService;
//# sourceMappingURL=speechRecognitionService.js.map
