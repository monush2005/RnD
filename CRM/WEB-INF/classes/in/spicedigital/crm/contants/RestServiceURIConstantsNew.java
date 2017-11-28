/*    */ package in.spicedigital.crm.contants;
/*    */ 
/*    */ import in.spicedigital.crm.utility.ReadProperties;
/*    */ 
/*    */ public class RestServiceURIConstantsNew
/*    */ {
/*  6 */   static String RootUrl = ReadProperties.getRootURL();
/*    */ 
/*  8 */   public static final String REST_COMMON_GET_LOGIN = RootUrl + "/crlg";
/*  9 */   public static final String REST_COMMON_SEND_SMS = RootUrl + "/crsm";
/* 10 */   public static final String REST_COMMON_FETCH_TERMINAL_ID = RootUrl + "/crfti";
/* 11 */   public static final String REST_COMMON_LOGOUT = RootUrl + "/crmlogout";
/* 12 */   public static final String REST_COMMON_GENERATE_TICKET = RootUrl + "/crmgt";
/* 13 */   public static final String REST_COMMON_VIEW_TICKETS = RootUrl + "/crmvt";
/* 14 */   public static final String REST_COMMON_ALLOCATE_AGENT = RootUrl + "/craad";
/* 15 */   public static final String REST_COMMON_FETCH_SERVICES = RootUrl + "/crfs";
/* 16 */   public static final String REST_COMMON_FETCH_CATEGORIES = RootUrl + "/crfcl";
/* 17 */   public static final String REST_COMMON_FETCH_SUB_CATEGORIES = RootUrl + "/crfscl";
/* 18 */   public static final String REST_COMMON_TICKET_HISTORY = RootUrl + "/crfth";
/* 19 */   public static final String REST_COMMON_UPDATE_TICKET = RootUrl + "/cruti";
/* 20 */   public static final String REST_COMMON_ADD_AGENT = RootUrl + "/cracac";
/* 21 */   public static final String REST_COMMON_RESET_PASSWORD = RootUrl + "/crrcp";
/* 22 */   public static final String REST_COMMON_EDIT_AGENT_DETAILS = RootUrl + "/crecd";
/* 23 */   public static final String REST_COMMON_SEND_USER_NAME = RootUrl + "/crfmno";
/* 24 */   public static final String REST_COMMON_FORGOT_PASSWORD = RootUrl + "/crfp";
/* 25 */   public static final String REST_COMMON_CCEID_DETAILS = RootUrl + "/crfc";
/* 26 */   public static final String REST_COMMON_AGENT_RATING = RootUrl + "/crmcr";
/* 27 */   public static final String REST_COMMON_FORWARD_TO_AGENT = RootUrl + "/crmfc";
/* 28 */   public static final String REST_COMMON_BLOCK_AGENT = RootUrl + "/crmbuc";
/* 29 */   public static final String REST_COMMON_DELETE_AGENT = RootUrl + "/crdc";
/* 30 */   public static final String REST_COMMON_FETCH_DEPT_SERVICES = RootUrl + "/crmfds";
/* 31 */   public static final String REST_COMMON_FETCH_CCE_PERFORMANCE = RootUrl + "/crmcp";
/* 32 */   public static final String REST_COMMON_ACTION_TAKEN_ON_USER = RootUrl + "/crbu";
/* 33 */   public static final String REST_COMMON_ADD_CATEGORY = RootUrl + "/craddcat";
/* 34 */   public static final String REST_COMMON_PENDING_HISTORY = RootUrl + "/crmftch";
/* 35 */   public static final String REST_COMMON_DELETE_CATEGORY = RootUrl + "/crremcat";
/* 36 */   public static final String REST_COMMON_VIEW_DETAILS = RootUrl + "/crftc";
/*    */   public static final String REST_COMMON_AGENT_CHAT_HISTORY = "https://reporting.umang.gov.in/AgentCallDistribution/user/history";
/*    */   public static final String REST_COMMON_EMAIL_HANDLER = "https://report.umang.gov.in/NotificationEngine/ws1/emailnotif";
/* 39 */   public static final String REST_COMMON_GET_LOGIN1 = RootUrl + "/crlg";
/* 40 */   public static final String REST_COMMON_VIEW_FEEDBACK = RootUrl + "/viewfb";
/* 41 */   public static final String REST_COMMON_WRAP_UP = RootUrl + "/crmwpu";
/* 42 */   public static final String REST_FETCH_USER_DETAILS = RootUrl + "/crfui";
/* 43 */   public static final String REST_FETCH_USER_EMAILS = RootUrl + "/crmfemail";
/* 44 */   public static final String REST_COMMON_RESPONSE_EMAIL = RootUrl + "/crmemailres";
/* 45 */   public static final String REST_COMMON_EMAIL_HISTORY = RootUrl + "/crmfemhistory";
/* 46 */   public static final String REST_COMMON_USER_INFO_CHAT = RootUrl + "/crmfudc";
/* 47 */   public static final String REST_COMMON_FETCH_CALL_DETAILS = RootUrl + "/crmfuc";
/* 48 */   public static final String REST_COMMON_PRE_CHAT_WRAPUP = RootUrl + "/crmfucc";
/* 49 */   public static final String REST_COMMON_EMAIL_CCE_PERFORMANCE = RootUrl + "/crmfer";
/* 50 */   public static final String REST_COMMON_FETCH_TLS = RootUrl + "/crmftl";
/* 51 */   public static final String REST_COMMON_FETCH_IVR_REPORT = RootUrl + "/crmfirs";
/* 52 */   public static final String REST_COMMON_FETCH_CHAT_REPORT = RootUrl + "/crmfcrs";
/* 53 */   public static final String REST_COMMON_FETCH_EMAIL_WRAPUP = RootUrl + "/crmgewu";
/* 54 */   public static final String REST_COMMON_FETCH_EMAIL_REPORT = RootUrl + "/crmfer";
/* 55 */   public static final String REST_COMMON_FETCH_QUERY_REPORT = RootUrl + "/crmfqr";
/* 56 */   public static final String REST_COMMON_FETCH_ALL_REPORT = RootUrl + "/crmfacqr";
/* 57 */   public static final String REST_COMMON_FETCH_AGENT_STATUS = RootUrl + "/crmfls";
/*    */   public static final String REST_COMMON_VIEW_LIVE_AGENTS = "https://reporting.umang.gov.in/AgentCall/history";
/* 60 */   public static final String REST_COMMON_BREAK_REQUEST = RootUrl + "/crmagbreak";
/* 61 */   public static final String REST_COMMON_IVR_KPI_REPORT = RootUrl + "/crmfsummary";
/* 62 */   public static final String REST_COMMON_FETCH_BREAKS = RootUrl + "/crmfbreak";
/* 63 */   public static final String REST_COMMON_CRM_COLLECTIVE_RPT = RootUrl + "/crmfagentcollectivereport";
/* 64 */   public static final String REST_COMMON_CHAT_KPI_REPORT = RootUrl + "/crmfagentchatkreport";
/* 65 */   public static final String REST_COMMON_IVR_DETAIL_REPORT = RootUrl + "/crmfagentivrreport";
/* 66 */   public static final String REST_COMMON_CHAT_DsETAIL_REPORT = RootUrl + "/crmfagentchatreport";
/*    */ 
/* 68 */   public static final String REST_COMMON_HOLD_CALL = RootUrl + "/crmhtime";
/* 69 */   public static final String REST_COMMON_FETCH_HOLD_STATUS = RootUrl + "/crmfetchhtime";
/* 70 */   public static final String REST_COMMON_SLA_REPORT = RootUrl + "/crmfSLAreport";
/* 71 */   public static final String REST_COMMON_IVR_HOUR_WISE_REPORT = RootUrl + "/crmIvrHourWiseReport";
/* 72 */   public static final String REST_COMMON_EMAIL_DETAIL_REPORT = RootUrl + "/crmEmailDetailReport";
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.contants.RestServiceURIConstantsNew
 * JD-Core Version:    0.6.0
 */