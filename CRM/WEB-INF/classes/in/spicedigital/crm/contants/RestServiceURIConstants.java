/*    */ package in.spicedigital.crm.contants;
/*    */ 
/*    */ import in.spicedigital.crm.utility.ReadProperties;
/*    */ 
/*    */ public class RestServiceURIConstants
/*    */ {
/*  6 */   static String RootUrl = ReadProperties.getRootURL();
/*  7 */   static String RootChatHis = ReadProperties.getChatHistory();
/*  8 */   static String RootAgentHistory = ReadProperties.getAgentHistory();
/*  9 */   static String EmailHandlerUrl = ReadProperties.EmailHandler();
/*    */ 
/* 12 */   public static final String REST_COMMON_GET_LOGIN = RootUrl + "/crlg";
/* 13 */   public static final String REST_COMMON_SEND_SMS = RootUrl + "/crsm";
/* 14 */   public static final String REST_COMMON_FETCH_TERMINAL_ID = RootUrl + "/crfti";
/* 15 */   public static final String REST_COMMON_LOGOUT = RootUrl + "/crmlogout";
/* 16 */   public static final String REST_COMMON_GENERATE_TICKET = RootUrl + "/crmgt";
/* 17 */   public static final String REST_COMMON_VIEW_TICKETS = RootUrl + "/crmvt";
/* 18 */   public static final String REST_COMMON_ALLOCATE_AGENT = RootUrl + "/craad";
/* 19 */   public static final String REST_COMMON_FETCH_SERVICES = RootUrl + "/crfs";
/* 20 */   public static final String REST_COMMON_FETCH_CATEGORIES = RootUrl + "/crfcl";
/* 21 */   public static final String REST_COMMON_FETCH_SUB_CATEGORIES = RootUrl + "/crfscl";
/* 22 */   public static final String REST_COMMON_TICKET_HISTORY = RootUrl + "/crfth";
/* 23 */   public static final String REST_COMMON_UPDATE_TICKET = RootUrl + "/cruti";
/* 24 */   public static final String REST_COMMON_ADD_AGENT = RootUrl + "/cracac";
/* 25 */   public static final String REST_COMMON_RESET_PASSWORD = RootUrl + "/crrcp";
/* 26 */   public static final String REST_COMMON_EDIT_AGENT_DETAILS = RootUrl + "/crecd";
/* 27 */   public static final String REST_COMMON_SEND_USER_NAME = RootUrl + "/crfmno";
/* 28 */   public static final String REST_COMMON_FORGOT_PASSWORD = RootUrl + "/crfp";
/* 29 */   public static final String REST_COMMON_CCEID_DETAILS = RootUrl + "/crfc";
/* 30 */   public static final String REST_COMMON_AGENT_RATING = RootUrl + "/crmcr";
/* 31 */   public static final String REST_COMMON_FORWARD_TO_AGENT = RootUrl + "/crmfc";
/* 32 */   public static final String REST_COMMON_BLOCK_AGENT = RootUrl + "/crmbuc";
/* 33 */   public static final String REST_COMMON_DELETE_AGENT = RootUrl + "/crdc";
/* 34 */   public static final String REST_COMMON_FETCH_DEPT_SERVICES = RootUrl + "/crmfds";
/* 35 */   public static final String REST_COMMON_FETCH_CCE_PERFORMANCE = RootUrl + "/crmcp";
/* 36 */   public static final String REST_COMMON_ACTION_TAKEN_ON_USER = RootUrl + "/crbu";
/* 37 */   public static final String REST_COMMON_ADD_CATEGORY = RootUrl + "/craddcat";
/* 38 */   public static final String REST_COMMON_PENDING_HISTORY = RootUrl + "/crmftch";
/* 39 */   public static final String REST_COMMON_DELETE_CATEGORY = RootUrl + "/crremcat";
/* 40 */   public static final String REST_COMMON_VIEW_DETAILS = RootUrl + "/crftc";
/* 41 */   public static final String REST_COMMON_AGENT_CHAT_HISTORY = RootChatHis + "/user/history";
/* 42 */   public static final String REST_COMMON_EMAIL_HANDLER = EmailHandlerUrl;
/*    */ 
/* 45 */   public static final String REST_COMMON_GET_LOGIN1 = RootUrl + "/crlg";
/* 46 */   public static final String REST_COMMON_VIEW_FEEDBACK = RootUrl + "/viewfb";
/* 47 */   public static final String REST_COMMON_WRAP_UP = RootUrl + "/crmwpu";
/* 48 */   public static final String REST_FETCH_USER_DETAILS = RootUrl + "/crfui";
/* 49 */   public static final String REST_FETCH_USER_EMAILS = RootUrl + "/crmfemail";
/* 50 */   public static final String REST_COMMON_RESPONSE_EMAIL = RootUrl + "/crmemailres";
/* 51 */   public static final String REST_COMMON_EMAIL_HISTORY = RootUrl + "/crmfemhistory";
/* 52 */   public static final String REST_COMMON_USER_INFO_CHAT = RootUrl + "/crmfudc";
/* 53 */   public static final String REST_COMMON_FETCH_CALL_DETAILS = RootUrl + "/crmfuc";
/* 54 */   public static final String REST_COMMON_PRE_CHAT_WRAPUP = RootUrl + "/crmfucc";
/* 55 */   public static final String REST_COMMON_EMAIL_CCE_PERFORMANCE = RootUrl + "/crmfer";
/* 56 */   public static final String REST_COMMON_FETCH_TLS = RootUrl + "/crmftl";
/* 57 */   public static final String REST_COMMON_FETCH_IVR_REPORT = RootUrl + "/crmfirs";
/* 58 */   public static final String REST_COMMON_FETCH_CHAT_REPORT = RootUrl + "/crmfcrs";
/* 59 */   public static final String REST_COMMON_FETCH_EMAIL_WRAPUP = RootUrl + "/crmgewu";
/* 60 */   public static final String REST_COMMON_FETCH_EMAIL_REPORT = RootUrl + "/crmfer";
/* 61 */   public static final String REST_COMMON_FETCH_QUERY_REPORT = RootUrl + "/crmfqr";
/* 62 */   public static final String REST_COMMON_FETCH_ALL_REPORT = RootUrl + "/crmfacqr";
/* 63 */   public static final String REST_COMMON_FETCH_AGENT_STATUS = RootUrl + "/crmfls";
/*    */ 
/* 65 */   public static final String REST_COMMON_VIEW_LIVE_AGENTS = RootAgentHistory + "/history";
/* 66 */   public static final String REST_COMMON_BREAK_REQUEST = RootUrl + "/crmagbreak";
/* 67 */   public static final String REST_COMMON_IVR_KPI_REPORT = RootUrl + "/crmfsummary";
/* 68 */   public static final String REST_COMMON_FETCH_BREAKS = RootUrl + "/crmfbreak";
/* 69 */   public static final String REST_COMMON_CRM_COLLECTIVE_RPT = RootUrl + "/crmfagentcollectivereport";
/* 70 */   public static final String REST_COMMON_CHAT_KPI_REPORT = RootUrl + "/crmfagentchatkreport";
/* 71 */   public static final String REST_COMMON_IVR_DETAIL_REPORT = RootUrl + "/crmfagentivrreport";
/* 72 */   public static final String REST_COMMON_CHAT_DETAIL_REPORT = RootUrl + "/crmfagentchatreport";
/*    */ 
/* 74 */   public static final String REST_COMMON_HOLD_CALL = RootUrl + "/crmhtime";
/* 75 */   public static final String REST_COMMON_FETCH_HOLD_STATUS = RootUrl + "/crmfetchhtime";
/*    */ 
/* 77 */   public static final String REST_COMMON_SLA_REPORT = RootUrl + "/crmfSLAreport";
/* 78 */   public static final String REST_COMMON_IVR_HOUR_WISE_REPORT = RootUrl + "/crmIvrHourWiseReport";
/* 79 */   public static final String REST_COMMON_EMAIL_DETAIL_REPORT = RootUrl + "/crmEmailDetailReport";
/* 80 */   public static final String REST_COMMON_PRE_AGENT_HISTORY = RootAgentHistory + "/agentHistory";
/* 81 */   public static final String REST_COMMOM_AGENT_PERFORMANCE_REPORT = RootUrl + "/crmfAPRReport";
/* 82 */   public static final String REST_COMMOM_FETCH_PENDING_WRAPUPS = RootUrl + "/crmPendingWrapUp";
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.contants.RestServiceURIConstants
 * JD-Core Version:    0.6.0
 */