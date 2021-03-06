exports['GitHub commitsSinceSha returns commits immediately before sha 1'] = [
  {
    "sha": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42",
    "message": "fix: Update PubSub timeouts. (#1967)",
    "files": [
      "PubSub/src/V1/resources/subscriber_client_config.json",
      "PubSub/synth.metadata"
    ]
  },
  {
    "sha": "269cf923ea6fd0375abaf0bb19790475693c6f90",
    "message": "fix: Assorted minor fixes for Cloud Datastore client (#1964)",
    "files": [
      "Datastore/src/Connection/Grpc.php",
      "Datastore/src/DatastoreClient.php",
      "Datastore/src/Entity.php",
      "Datastore/src/EntityIterator.php",
      "Datastore/src/EntityMapper.php",
      "Datastore/src/Key.php",
      "Datastore/src/Operation.php",
      "Datastore/src/TransactionTrait.php"
    ]
  },
  {
    "sha": "da356f004ff891e11a369fd634f55d6abade708f",
    "message": "Prepare v0.102.0 (#1965)",
    "files": [
      "AutoMl/VERSION",
      "Debugger/VERSION",
      "Debugger/src/DebuggerClient.php",
      "Dialogflow/VERSION",
      "Firestore/VERSION",
      "Firestore/src/FirestoreClient.php",
      "Language/VERSION",
      "Language/src/LanguageClient.php",
      "Speech/VERSION",
      "Speech/src/SpeechClient.php",
      "Tasks/VERSION",
      "Vision/VERSION",
      "Vision/src/VisionClient.php",
      "WebSecurityScanner/VERSION",
      "composer.json",
      "docs/manifest.json",
      "src/ServiceBuilder.php",
      "src/Version.php"
    ]
  },
  {
    "sha": "fa5761e9e52f36506a72a9292843259d198468b0",
    "message": "feat: Add Web Security Center Client (#1961)\n\n* add synth script\r\n\r\n* generate web security scanner\r\n\r\n* add to docs site\r\n\r\n* update README\r\n\r\n* update composer\r\n\r\n* remove whitespace in sample\r\n\r\n* add phpunit config\r\n\r\n* add hyperlink\r\n\r\n* autoload tests\r\n\r\n* more autoload fixes",
    "files": [
      "README.md",
      "WebSecurityScanner/.gitattributes",
      "WebSecurityScanner/.github/pull_request_template.md",
      "WebSecurityScanner/CONTRIBUTING.md",
      "WebSecurityScanner/LICENSE",
      "WebSecurityScanner/README.md",
      "WebSecurityScanner/composer.json",
      "WebSecurityScanner/metadata/V1Beta/CrawledUrl.php",
      "WebSecurityScanner/metadata/V1Beta/Finding.php",
      "WebSecurityScanner/metadata/V1Beta/FindingAddon.php",
      "WebSecurityScanner/metadata/V1Beta/FindingTypeStats.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfig.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfigError.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRun.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/metadata/V1Beta/WebSecurityScanner.php",
      "WebSecurityScanner/phpunit.xml.dist",
      "WebSecurityScanner/src/V1beta/CrawledUrl.php",
      "WebSecurityScanner/src/V1beta/CreateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/DeleteScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/Finding.php",
      "WebSecurityScanner/src/V1beta/FindingTypeStats.php",
      "WebSecurityScanner/src/V1beta/Form.php",
      "WebSecurityScanner/src/V1beta/Gapic/WebSecurityScannerGapicClient.php",
      "WebSecurityScanner/src/V1beta/GetFindingRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsResponse.php",
      "WebSecurityScanner/src/V1beta/OutdatedLibrary.php",
      "WebSecurityScanner/src/V1beta/README.md",
      "WebSecurityScanner/src/V1beta/ScanConfig.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError/Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError_Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanRun.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ResultState.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ResultState.php",
      "WebSecurityScanner/src/V1beta/StartScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/StopScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/UpdateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/ViolatingResource.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders/Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders_Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableParameters.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerClient.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerGrpcClient.php",
      "WebSecurityScanner/src/V1beta/Xss.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_client_config.json",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_descriptor_config.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_rest_client_config.php",
      "WebSecurityScanner/synth.metadata",
      "WebSecurityScanner/synth.py",
      "WebSecurityScanner/tests/Unit/V1beta/WebSecurityScannerClientTest.php",
      "composer.json",
      "docs/contents/cloud-web-security-scanner.json",
      "docs/contents/google-cloud.json",
      "docs/manifest.json"
    ]
  },
  {
    "sha": "8db7f3b19c46c873897d79c89ce35b8492e5fe60",
    "message": "feat: move speech from alpha -> beta (#1962)",
    "files": [
      "README.md",
      "Speech/README.md"
    ]
  },
  {
    "sha": "52f4fbfa1fc3fde585c84e64ef40571d2b85d72e",
    "message": "fix: correctly label as beta (#1963)",
    "files": [
      "AutoMl/README.md"
    ]
  },
  {
    "sha": "da6e52d956c1e35d19e75e0f2fdba439739ba364",
    "message": "feat: Add mp3 encoding and context hint boost support. (#1959)",
    "files": [
      "Speech/metadata/V1P1Beta1/CloudSpeech.php",
      "Speech/src/V1p1beta1/RecognitionConfig/AudioEncoding.php",
      "Speech/src/V1p1beta1/SpeechContext.php",
      "Speech/synth.metadata"
    ]
  },
  {
    "sha": "bf69d0f204474b88b3f8b5a72a392129d16a3929",
    "message": "fix: language system test (#1958)",
    "files": [
      "Language/tests/System/AnalyzeTest.php"
    ]
  },
  {
    "sha": "a8b5b0bc9e9ed7998e30983834f7d841b6a37d6f",
    "message": "fix: continue switch targeting warning in PHP 7.3 (#1957)",
    "files": [
      "Debugger/src/Agent.php"
    ]
  }
]

exports['GitHub findFilesByfilename returns files matching the requested pattern 1'] = [
  "appengine/pom.xml",
  "bom/pom.xml",
  "credentials/pom.xml",
  "oauth2_http/pom.xml",
  "pom.xml"
]
