import React from 'react'

const Notifications = (props) => {
  return (
    [{
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.techart.ats",
        "sha256_cert_fingerprints":
        ["CF:DF:3C:ED:EF:66:DD:6A:78:9B:FD:60:42:79:91:7C:09:31:50:56:42:3E:7C:33:54:99:E9:EA:5C:3E:1F:E3"]
      }
    }]
  )
}

export default Notifications
