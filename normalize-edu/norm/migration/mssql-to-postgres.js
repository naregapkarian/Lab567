var _0x25ae=['getType','int','int\x20identity','encrypt','decimal','char','varchar','nchar','toISOString','insert\x20query','-------------------\x20end\x20------------------->\x20\x0a','-------------------\x20resp\x20------------------->\x20\x0a','-------------------\x20err\x20------------------->\x20\x0a','err','DROP\x20TABLE\x20IF\x20EXISTS\x20\x22','dropTableIfExist\x20err','----\x20i,\x20',',\x20Table\x20','\x20deleted\x20if\x20exist.\x20migration\x20has\x20started\x20---------->','MSSQLToPG','defineProperty','__esModule','mssql','async-foreach','forEach','../wrapper/mssql.wrapper','../encryption/encryptor','tables','api','legacyDB','MSSQLWrapper','encryptor','----\x20run()\x20migrate\x20----->','length','options','migrate','dbDriver','dbUser','dbPassword','dbServer','dbName','connect','then','dbType','postgres','dropTableIfExistThenMigrate','attribute','type','convertToUTCDate','slice','indexOf','sanitize','toString','replace','trim','includes','...','prepareCreate','true','PRECISION','\x22\x20integer','bit','\x22\x20boolean\x20default\x20false','\x22\x20varchar(','text','image','\x22\x20text','date','datetime2','datetime','smalldatetime','\x22\x20timestamp','uniqueidentifier','env','ENABLE_DB_ENCRYPTION','table','secretFields','exec\x20sp_columns\x20','push','COLUMN_NAME','TYPE_NAME','\x22created_at\x22\x20timestamp,\x20\x22updated_at\x22\x20timestamp,\x20\x22deleted_at\x22\x20timestamp','create\x20table\x20\x22','query','resp','\x22\x20order\x20by\x20','lenght','log','err\x20from\x20legacyDB\x20select','async'];(function(_0x5b2cbe,_0x5b2b81){var _0x26b502=function(_0x5547d1){while(--_0x5547d1){_0x5b2cbe['push'](_0x5b2cbe['shift']());}};_0x26b502(++_0x5b2b81);}(_0x25ae,0x122));var _0x269b=function(_0x3137d4,_0x2b595e){_0x3137d4=_0x3137d4-0x0;var _0x3077a5=_0x25ae[_0x3137d4];return _0x3077a5;};'use strict';Object[_0x269b('0x0')](exports,_0x269b('0x1'),{'value':!![]});const sql=require(_0x269b('0x2'));const pg=require('pg');const fs=require('fs');const asyncForEach=require(_0x269b('0x3'))[_0x269b('0x4')];const mssql_wrapper_1=require(_0x269b('0x5'));const encryptor_1=require(_0x269b('0x6'));class MSSQLToPG{constructor(_0x6c143e,_0x2bf7f6,_0x143d50){this['api']=_0x143d50;this[_0x269b('0x7')]=_0x2bf7f6;this['options']=_0x6c143e;this['db']=this[_0x269b('0x8')]['db'];MSSQLToPG[_0x269b('0x9')]=new mssql_wrapper_1[(_0x269b('0xa'))](_0x6c143e,null);MSSQLToPG[_0x269b('0xb')]=new encryptor_1['Encryptor'](process['env']['BY_KEY']);}['run'](){console['log'](_0x269b('0xc'));let _0x3e25fb=this[_0x269b('0x7')];if(_0x3e25fb[_0x269b('0xd')]>0x0){let _0x4eeb67=this[_0x269b('0xe')];if(_0x4eeb67['migrate']!=null){if(_0x4eeb67[_0x269b('0xf')][_0x269b('0x10')]=='mssql'){const _0x1f94ca={'user':_0x4eeb67[_0x269b('0xf')][_0x269b('0x11')],'password':_0x4eeb67[_0x269b('0xf')][_0x269b('0x12')],'server':_0x4eeb67[_0x269b('0xf')][_0x269b('0x13')],'database':_0x4eeb67[_0x269b('0xf')][_0x269b('0x14')],'requestTimeout':0x493e0,'pool':{'idleTimeoutMillis':0x493e0,'max':0x64}};this[_0x269b('0x15')](_0x1f94ca)[_0x269b('0x16')](_0x32fe2e=>{if(_0x32fe2e){if(_0x4eeb67[_0x269b('0x17')]==_0x269b('0x18')){this[_0x269b('0x19')](_0x3e25fb,this[_0x269b('0xf')]);}}});}}}else{console['log']('No\x20tables\x20were\x20configured\x20to\x20migrate!');}}[_0x269b('0x15')](_0x385720){return MSSQLToPG[_0x269b('0x9')][_0x269b('0x15')](_0x385720)[_0x269b('0x16')](_0x335be4=>{return _0x335be4;});}static['getType'](_0x3195fa,_0x136418){for(let _0x5ad412 in _0x136418){if(_0x136418[_0x5ad412][_0x269b('0x1a')]==_0x3195fa){return _0x136418[_0x5ad412][_0x269b('0x1b')];}}}static[_0x269b('0x1c')](_0x2b403a){let _0x2d0bf2=_0x2b403a||null;let _0x11bd28;if(_0x2d0bf2!=null){_0x11bd28=_0x2d0bf2[_0x269b('0x1d')](0x0,_0x2d0bf2[_0x269b('0x1e')]('T'));}return _0x11bd28;}static[_0x269b('0x1f')](_0x569de2){let _0x559ed6=_0x569de2[_0x269b('0x20')]()[_0x269b('0x21')](/(^\s+|\s+$)/g,'')[_0x269b('0x22')]();if(_0x559ed6[_0x269b('0x23')]('\x27')){_0x559ed6=_0x559ed6['replace'](/'/g,'\x27\x27');}if(_0x559ed6['length']>=0xfe){_0x559ed6=_0x559ed6[_0x269b('0x1d')](0x0,0xfa)+_0x269b('0x24');}return _0x559ed6;}static[_0x269b('0x25')](_0x26facc){let _0x103bbc='';let _0x131a26=_0x26facc['COLUMN_NAME'],_0x4f621c=process['env']['ENABLE_DB_ENCRYPTION']===_0x269b('0x26')||![],_0x3db13d=_0x4f621c?0x400:_0x26facc['CHAR_OCTET_LENGTH'],_0x1cfa57=_0x4f621c?0x400:_0x26facc[_0x269b('0x27')];switch(_0x26facc['TYPE_NAME']){case'int':return _0x103bbc='\x22'+_0x131a26+_0x269b('0x28');case _0x269b('0x29'):case'boolean':return _0x103bbc='\x22'+_0x131a26+_0x269b('0x2a');case'char':return _0x103bbc='\x22'+_0x131a26+_0x269b('0x2b')+(_0x3db13d!=null?_0x3db13d:_0x1cfa57)+')';case _0x269b('0x2c'):case _0x269b('0x2d'):return _0x103bbc='\x22'+_0x131a26+_0x269b('0x2e');case _0x269b('0x2f'):case _0x269b('0x30'):case _0x269b('0x31'):case _0x269b('0x32'):return _0x103bbc='\x22'+_0x131a26+_0x269b('0x33');case _0x269b('0x34'):return _0x103bbc='\x22'+_0x131a26+_0x269b('0x2b')+(_0x3db13d!=null?_0x3db13d:_0x1cfa57)+')';default:return _0x103bbc='\x22'+_0x131a26+_0x269b('0x2b')+(_0x3db13d!=null?_0x3db13d:_0x1cfa57)+')';}}static['encrypt'](_0x2a4691,_0x52fe5e,_0x5b52fb){const _0x147a5a=process[_0x269b('0x35')][_0x269b('0x36')]==='true';if(_0x5b52fb&&_0x5b52fb['indexOf'](_0x2a4691)!=-0x1&&_0x147a5a){return MSSQLToPG[_0x269b('0xb')]['encrypt'](_0x52fe5e);}else{return _0x52fe5e;}}[_0x269b('0xf')](_0x1d5d7a){let _0x5a7544=_0x1d5d7a[_0x269b('0x37')][_0x269b('0x1d')](0x1,_0x1d5d7a[_0x269b('0x37')]['length']),_0xe5fd24=_0x1d5d7a[_0x269b('0x37')],_0x14d1dc=_0x1d5d7a[_0x269b('0x38')]!=null?_0x1d5d7a[_0x269b('0x38')]:![];MSSQLToPG['legacyDB']['query'](_0x269b('0x39')+_0x5a7544,(_0x21e215,_0x10a425)=>{let _0x5b887e='',_0x590a8b=[];let _0xac64e1='';for(let _0xaf5aed in _0x10a425){_0x590a8b[_0x269b('0x3a')]({'attribute':_0x10a425[_0xaf5aed][_0x269b('0x3b')],'type':_0x10a425[_0xaf5aed][_0x269b('0x3c')]});_0x5b887e+='\x22'+_0x10a425[_0xaf5aed]['COLUMN_NAME']+'\x22\x20'+',\x20';_0xac64e1+=''+MSSQLToPG['prepareCreate'](_0x10a425[_0xaf5aed])+',\x20';}_0x5b887e+='\x22created_at\x22,\x20\x22updated_at\x22,\x20\x22deleted_at\x22';_0xac64e1+=_0x269b('0x3d');let _0x447eed=_0x269b('0x3e')+_0xe5fd24+'\x22\x20('+_0xac64e1+')';this[_0x269b('0x8')]['db'][_0x269b('0x3f')](_0x447eed,null,(_0x21e215,_0x1d5d7a)=>{if(_0x1d5d7a){console['log'](_0x269b('0x40'),_0x1d5d7a);MSSQLToPG[_0x269b('0x9')][_0x269b('0x3f')]('SELECT\x20*\x20FROM\x20\x22'+_0x5a7544+_0x269b('0x41')+_0x10a425[0x0]['COLUMN_NAME'],(_0x21e215,_0x194221)=>{let _0xcababc=_0x194221[_0x269b('0x42')];if(_0x21e215){console[_0x269b('0x43')](_0x269b('0x44'),_0x21e215);}else{asyncForEach(_0x194221,function(_0x53c09e,_0x1e4460,_0x4ff805){let _0x3e5422='',_0x157c73=this[_0x269b('0x45')]();for(let _0x755f17 in _0x53c09e){let _0x3f9338=MSSQLToPG[_0x269b('0x46')](_0x755f17,_0x590a8b),_0x1f053c=_0x53c09e[_0x755f17]!=null||_0x53c09e[_0x755f17]!=''?_0x53c09e[_0x755f17]:null;switch(_0x3f9338){case _0x269b('0x47'):case _0x269b('0x48'):_0x3e5422+=_0x1f053c!=null?MSSQLToPG[_0x269b('0x49')](_0x755f17,parseInt(_0x1f053c),_0x14d1dc)+',\x20':null+',\x20';break;case _0x269b('0x4a'):_0x3e5422+=_0x1f053c!=null?MSSQLToPG[_0x269b('0x49')](_0x755f17,parseFloat(_0x1f053c),_0x14d1dc)+',\x20':null+',\x20';break;case _0x269b('0x2d'):_0x3e5422+=_0x1f053c!=null?'\x27'+MSSQLToPG[_0x269b('0x49')](_0x755f17,_0x1f053c['toString']('base64'),_0x14d1dc)+'\x27'+',\x20':null+',\x20';break;case _0x269b('0x29'):case _0x269b('0x4b'):case _0x269b('0x2c'):case _0x269b('0x4c'):case _0x269b('0x34'):case _0x269b('0x4d'):_0x3e5422+=_0x1f053c!=null?'\x27'+MSSQLToPG[_0x269b('0x49')](_0x755f17,MSSQLToPG['sanitize'](_0x1f053c),_0x14d1dc)+'\x27'+',\x20':null+',\x20';break;case _0x269b('0x2f'):case'datetime2':case _0x269b('0x31'):case _0x269b('0x32'):_0x3e5422+=_0x1f053c!=null?'\x27'+MSSQLToPG[_0x269b('0x49')](_0x755f17,MSSQLToPG[_0x269b('0x1c')](_0x1f053c[_0x269b('0x4e')]()),_0x14d1dc)+'\x27'+',\x20':null+',\x20';break;default:_0x3e5422+=_0x1f053c!=null?'\x27'+MSSQLToPG['encrypt'](_0x755f17,MSSQLToPG[_0x269b('0x1f')](_0x1f053c),_0x14d1dc)+'\x27'+',\x20':null+',\x20';break;}}_0x3e5422+='\x27'+MSSQLToPG[_0x269b('0x1c')](new Date()[_0x269b('0x4e')]())+'\x27'+',\x20';_0x3e5422+='\x27'+MSSQLToPG[_0x269b('0x1c')](new Date()['toISOString']())+'\x27'+',\x20';_0x3e5422+=null;let _0x1b9509='INSERT\x20INTO\x20\x22'+_0xe5fd24+'\x22\x20('+_0x5b887e+')\x20values('+_0x3e5422+')';console[_0x269b('0x43')](_0x269b('0x4f'),_0x1b9509);console[_0x269b('0x43')](_0x269b('0x50'));this[_0x269b('0x8')]['db'][_0x269b('0x3f')](_0x1b9509,null,(_0x21e215,_0x10a425)=>{if(_0x10a425){console[_0x269b('0x43')](_0x269b('0x51'),_0x10a425,'\x20k:\x20',_0x1e4460);}else{console['log'](_0x269b('0x52'),_0x21e215,'\x20k:\x20',_0x1e4460);}_0x157c73();});});}});}else{console[_0x269b('0x43')](_0x269b('0x53'),_0x21e215);}});});}[_0x269b('0x19')](_0x1f1f31,_0x53498c){asyncForEach(_0x1f1f31,function(_0x36acbe,_0x3aabb3,_0x2e2703){let _0x231db7=_0x36acbe['table'],_0x3ec24c=_0x269b('0x54')+_0x231db7+'\x22',_0x2a53b3=this[_0x269b('0x45')]();console[_0x269b('0x43')](_0x3ec24c);this['api']['db'][_0x269b('0x3f')](_0x3ec24c,null,(_0x1dd027,_0x54f23a)=>{if(_0x1dd027){console[_0x269b('0x43')](_0x269b('0x55'),_0x1dd027);_0x2a53b3();}else{console[_0x269b('0x43')](_0x269b('0x56')+_0x3aabb3+_0x269b('0x57')+_0x231db7+_0x269b('0x58'));_0x53498c(_0x36acbe);_0x2a53b3();}});});}}exports[_0x269b('0x59')]=MSSQLToPG;