/* eslint-disable global-require */

module.exports = {
  UCB: {
    campusCode: '01',
    url: 'ldaps://ldap.berkeley.edu',
    username: 'uid=ucop-erm-ehs,ou=applications,dc=berkeley,dc=edu',
    base: ['ou=people,dc=berkeley,dc=edu', 'ou=guests,dc=berkeley,dc=edu'],
    filter: '(objectclass=person)',
    fullDump: false
  },
  UCSF: {
    campusCode: '02',
    url: 'ldaps://eds.ucsf.edu',
    username: 'uid=UC EHS Lookup,ou=applications,dc=ucsf,dc=edu',
    base: ['ou=people,dc=ucsf,dc=edu'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/ucsf-ldap'),
    feedType: PEOPLE,
  },
  UCD: {
    campusCode: '03',
    url: 'ldaps://ldap.ucdavis.edu',
    username: 'uid=research,ou=Special Users,dc=ucdavis,dc=edu',
    base: ['ou=People,dc=ucdavis,dc=edu'],
    filter: '(objectclass=person)(uid=*)',
    fullDump: false,
    transform: require('../transform/ldap/ucd-ldap'),
    feedType: PEOPLE,
  },
  UCSC: {
    campusCode: '07',
    url: 'ldaps://ldap-gold.ucsc.edu',
    username: 'cn=ermucdavis,ou=apps,dc=ucsc,dc=edu',
    base: ['ou=people,dc=ucsc,dc=edu'],
    filter: '(objectclass=person)(uid=*)(ucscPersonPubDisplay=TRUE)',
    fullDump: false,
    transform: require('../transform/ldap/ucsc-ldap'),
    feedType: PEOPLE,
  },
  UCSB: {
    campusCode: '08',
    url: 'ldaps://ldap.ucsb.edu',
    username: 'uid=ermehsucop,ou=applications,o=ucsb',
    base: ['ou=people,o=ucsb'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/ucsb-ldap'),
    feedType: PEOPLE,
  },
  UCM: {
    campusCode: '10',
    url: 'ldaps://ldaps.ucmerced.edu',
    username: 'uid=uc-risk-svs-user,ou=Special Users,dc=ucmerced,dc=edu',
    base: ['dc=ucmerced,dc=edu'],
    // Possible values for eduPersonAffiliation and eduPersonPrimaryAffiliation:
    // 'affiliate', 'alumni', 'applicant', 'faculty', 'generic', 'staff', 'student'
    filter:
      '(!(eduPersonPrimaryAffiliation=applicant))' +
      '(|' +
      '(eduPersonAffiliation=affiliate)' + // NOTE: this also includes some "Housing" accounts; can't filter them out
      '(eduPersonAffiliation=faculty)' +
      '(eduPersonAffiliation=staff)' +
      '(eduPersonAffiliation=student)' +
      ')',
    fullDump: false,
    transform: require('../transform/ldap/ucm-ldap'),
    feedType: PEOPLE,
  },
  UCI: {
    campusCode: '09',
    url: 'ldaps://ldap-auth.oit.uci.edu',
    username: 'uid=ehs-rss-ucdavis,ou=people,dc=uci,dc=edu',
    base: ['dc=uci,dc=edu'],
    filter: '(objectclass=person)(!(uciAffiliation=group))',
    fullDump: false,
    transform: require('../transform/ldap/uci-ldap'),
    feedType: PEOPLE,
  },
  CSU05: {
    campusCode: 'CSU05',
    url: 'ldaps://cldaps.csueastbay.edu',
    username: 'svc-risk',
    base: ['OU=Students,OU=People,DC=ad,DC=csueastbay,DC=edu', 'OU=Employees,OU=People,DC=ad,DC=csueastbay,DC=edu'],
    filter:
      '(objectclass=person)(sAMAccountName=*)' +
      '(|' +
      '(eduPersonAffiliation=Faculty)' +
      '(eduPersonAffiliation=Staff)' +
      '(eduPersonAffiliation=Student)' +
      ')',
    fullDump: false,
    transform: require('../transform/ldap/csu05-ldap'),
    feedType: PEOPLE,
  },
  CSU10: {
    campusCode: 'CSU10',
    url: 'ldaps://ldap.cpp.edu',
    username: 'cn=it_uchem,ou=user,ou=service,dc=cpp,dc=edu',
    base: ['ou=user,dc=cpp,dc=edu'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu10-ldap'),
    feedType: PEOPLE,
  },
  CSU40: {
    campusCode: 'CSU40',
    url: 'ldaps://idm.csulb.edu',
    username: 'CN=rss_service,OU=Users,OU=Infrastructure Support,DC=idm,DC=csulb,DC=edu',
    base: ['ou=active,OU=People,DC=idm,DC=csulb,DC=edu'],
    filter: '(objectclass=person)(uid=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu40-ldap'),
    feedType: PEOPLE,
  },
  CSU45: {
    campusCode: 'CSU45',
    url: 'ldaps://ldap-ad-nat.calstatela.edu',
    username: 'CN=svc.rss,OU=Service,OU=Users,OU=Enterprise Support,dc=ad,dc=calstatela,dc=edu',
    base: ['OU=Students,OU=People,DC=ad,DC=calstatela,DC=edu', 'OU=Employees,OU=People,DC=ad,DC=calstatela,DC=edu'],
    filter: '(objectclass=person)(userPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu45-ldap'),
    feedType: PEOPLE,
  },
  CSU60: {
    campusCode: 'CSU60',
    url: 'ldaps://ldap.saclink.csus.edu',
    username: 'irt-svc-labsafety@saclink.csus.edu',
    base: ['DC=saclink,DC=csus,DC=edu'],
    filter: '(objectclass=person)(sAMAccountName=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu60-ldap'),
    feedType: PEOPLE,
  },
  CSU63: {
    campusCode: 'CSU63',
    url: 'ldaps://iset-ldap-proxy.csusb.edu',
    username: 'cn=risk-and-safety-solutions,cn=proxy',
    base: ['dc=csusb,dc=edu'],
    filter: '(objectclass=person)(uid=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu63-ldap'),
    feedType: PEOPLE,
  },
  CSU68: {
    campusCode: 'CSU68',
    url: 'ldaps://adldap.csusm.edu',
    username: 'csusm\\adquery_ucdavis',
    base: ['OU=students,OU=academic,DC=csusm,DC=edu', 'OU=fac-staff,DC=csusm,DC=edu'],
    // Possible values for calstateEduPersonAffiliation:
    // 'Employee Faculty', 'Employee Staff', 'Employee State', 'Former Employee', 'Former Student',
    // 'Non-Member Auxilary', 'Non-Member', 'Non-member Volunteer', 'Staff', 'Student', 'Volunteer'
    filter:
      '(objectclass=person)(userPrincipalName=*)' +
      '(|' +
      '(calstateEduPersonAffiliation=Employee Faculty)' +
      '(calstateEduPersonAffiliation=Employee Staff)' +
      '(calstateEduPersonAffiliation=Employee State)' +
      '(calstateEduPersonAffiliation=Non-Member)' +
      '(calstateEduPersonAffiliation=Staff)' +
      '(calstateEduPersonAffiliation=Student)' +
      ')',
    fullDump: false,
    transform: require('../transform/ldap/csu68-ldap'),
    feedType: PEOPLE,
  },
  CSU73: {
    campusCode: 'CSU73',
    url: 'ldaps://rss.harbor.csuci.edu',
    username: 'HARBOR\\rss-lookup',
    base: [
      'OU=Staff,DC=harbor,DC=csuci,DC=edu',
      'OU=students,DC=harbor,DC=csuci,DC=edu',
      'OU=StudentStaff,DC=harbor,DC=csuci,DC=edu',
    ],
    filter: '(objectclass=person)(uid=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu73-ldap'),
    feedType: PEOPLE,
  },
  CSU80: {
    campusCode: 'CSU80',
    url: 'ldaps://sjsuldap.sjsu.edu',
    username: 'ITS-FDO-EHSRSS-SA01',
    base: ['OU=sjsuPeople,DC=SJSUAD,DC=SJSU,DC=EDU'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu80-ldap'),
    feedType: PEOPLE,
  },
  CSU90: {
    campusCode: 'CSU90',
    url: 'ldaps://lookup.csustan.edu',
    username: 'rss-solutions-viewer',
    base: [
      'OU=Faculty,OU=People,DC=csustan,DC=edu',
      'OU=Staff,OU=People,DC=csustan,DC=edu',
      'OU=Students,OU=People,DC=csustan,DC=edu',
    ],
    filter: '(objectclass=person)(sAMAccountName=*)',
    fullDump: false,
    transform: require('../transform/ldap/csu90-ldap'),
    feedType: PEOPLE,
  },
  PSU: {
    campusCode: 'PSU',
    url: 'ldaps://dirapps.aset.psu.edu',
    username: 'uid=uasrss1,dc=psu,dc=edu',
    base: ['dc=psu,dc=edu'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/psu-ldap'),
    feedType: PEOPLE,
  },
  UAA: {
    campusCode: 'UAA',
    url: 'ldaps://auth.uaa.alaska.edu',
    username: 'ua\\uaa_rss_service',
    base: ['DC=ua,DC=ad,DC=alaska,DC=edu'],
    filter: `(objectclass=person)(userPrincipalName=*)(accountExpires>=${(Date.now() + 11644473600000) * 10000})`, // https://community.neo4j.com/t/how-to-retrieve-and-convert-active-directory-ldap-timestamp-for-lastlogon/2403
    fullDump: false,
    transform: require('../transform/ldap/uaa-ldap'),
    feedType: PEOPLE,
  },
  UHUH: {
    campusCode: 'UHuh',
    url: 'ldaps://ldap-www-dir.its.hawaii.edu',
    username: 'cn=ermsp,ou=specials,dc=hawaii,dc=edu',
    base: ['ou=people,dc=hawaii,dc=edu'],
    filter: '(objectclass=person)(eduPersonPrincipalName=*)',
    fullDump: false,
    transform: require('../transform/ldap/uhuh-ldap'),
    feedType: PEOPLE,
  },
};

