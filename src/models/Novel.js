export default class Novel {
  static schema = {
    name: 'Novel',
    primaryKey: 'directoryUrl',
    properties: {
      directoryUrl:'string',
      title: 'string',
      isParseDirectory:{type: 'bool', default: false},
      logo: {type:'string',optional:true},
      directory: {type: 'list', objectType: 'Article'},
      author: 'string',
      desc:'string', //描述内容
      star:{type: 'bool', default: false},
      created:'date',
    }
  }
}