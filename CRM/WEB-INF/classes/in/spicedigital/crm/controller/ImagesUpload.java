/*    */ package in.spicedigital.crm.controller;
/*    */ 
/*    */ import in.spicedigital.crm.utility.ReadProperties;
/*    */ import java.io.BufferedOutputStream;
/*    */ import java.io.File;
/*    */ import java.io.FileOutputStream;
/*    */ import java.io.PrintStream;
/*    */ import java.util.Iterator;
/*    */ import javax.servlet.http.HttpServletRequest;
/*    */ import javax.servlet.http.HttpServletResponse;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
/*    */ import org.springframework.beans.factory.annotation.Autowired;
/*    */ import org.springframework.context.ApplicationContext;
/*    */ import org.springframework.stereotype.Controller;
/*    */ import org.springframework.web.bind.annotation.RequestMapping;
/*    */ import org.springframework.web.bind.annotation.ResponseBody;
/*    */ import org.springframework.web.multipart.MultipartFile;
/*    */ import org.springframework.web.multipart.MultipartHttpServletRequest;
/*    */ 
/*    */ @Controller
/*    */ public class ImagesUpload
/*    */ {
/*    */ 
/*    */   @Autowired
/*    */   ApplicationContext context;
/* 44 */   private static final Logger logger = LoggerFactory.getLogger(ImagesUpload.class);
/*    */ 
/*    */   @RequestMapping(value={"imageUpload"}, method={org.springframework.web.bind.annotation.RequestMethod.POST})
/*    */   @ResponseBody
/*    */   public String imageUpload(HttpServletRequest request, HttpServletResponse response) {
/* 51 */     String docFolderPath = ReadProperties.getDocumentFolder();
/*    */ 
/* 53 */     //System.out.println("docFolderPath" + docFolderPath);
/* 54 */     String res = "";
/* 55 */     //System.out.println("request" + request);
/*    */     try {
/* 57 */       MultipartHttpServletRequest req = (MultipartHttpServletRequest)request;
/* 58 */       Iterator itr = req.getFileNames();
/* 59 */       while (itr.hasNext()) {
/* 60 */         MultipartFile fl = req.getFile((String)itr.next());
/* 61 */         String fileName = fl.getOriginalFilename();
/* 62 */         //System.out.println("in file upload controller");
/* 63 */         String mobNo = req.getParameter("mobileNumber");
/* 64 */         if (fl.isEmpty()) continue;
/*    */         try {
/* 66 */           //System.out.println("********");
/* 67 */           byte[] bytes = fl.getBytes();
/* 68 */           String filePathh = docFolderPath;
/*    */ 
/* 71 */           File dir = new File(filePathh);
/* 72 */           if (!dir.exists()) {
/* 73 */             dir.mkdirs();
/*    */           }
/* 75 */           File serverFile = new File(dir.getAbsolutePath() + 
/* 76 */             File.separator + fileName);
/* 77 */           //System.out.println("serverFile**************" + serverFile);
/* 78 */           BufferedOutputStream stream = new BufferedOutputStream(
/* 79 */             new FileOutputStream(serverFile));
/* 80 */           stream.write(bytes);
/* 81 */           stream.close();
/* 82 */           res = "{\"status\":\"success\"}";
/*    */         } catch (Exception localException1) {
/*    */         }
/*    */       }
/*    */     } catch (Exception e) {
/* 87 */       e.printStackTrace();
/* 88 */     }return res;
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.controller.ImagesUpload
 * JD-Core Version:    0.6.0
 */