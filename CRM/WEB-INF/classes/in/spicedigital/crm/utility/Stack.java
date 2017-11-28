/*    */ package in.spicedigital.crm.utility;
/*    */ 
/*    */ import java.io.PrintStream;
/*    */ import java.util.Scanner;
/*    */ 
/*    */ public class Stack
/*    */ {
/*    */   int tos;
/*  7 */   int[] stack = new int[5];
/*    */ 
/*    */   void pushInArr(int item) {
/* 10 */     if (this.tos == 4) {
/* 11 */      // System.out.println("stack overflow");
/*    */     }
/*    */     else
/* 14 */       this.stack[(++this.tos)] = item;
/*    */   }
/*    */ 
/*    */   int popInArr() {
/* 18 */     if (this.tos < 0) {
/* 19 */      // System.out.println("stack is empty");
/* 20 */       return this.tos;
/*    */     }
/*    */ 
/* 23 */     return this.stack[(this.tos--)];
/*    */   }
/*    */ 
/*    */   public static void main(String[] args) {
/* 27 */     Scanner s = new Scanner(System.in);
/* 28 */     int l = s.nextInt();
/* 29 */     System.out.println();
/*    */   }
/*    */ }

/* Location:           C:\Users\cc-e00269\Desktop\new\New folder\WEB-INF\classes\
 * Qualified Name:     in.spicedigital.crm.utility.Stack
 * JD-Core Version:    0.6.0
 */