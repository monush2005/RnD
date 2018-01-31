/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package in.spicedigital.umang.filter;

/**
 *
 * @author Abhishek_singh
 */
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

public class GZIPResponseWrapper extends HttpServletResponseWrapper {
  protected HttpServletResponse origResponse = null;
  protected ServletOutputStream stream = null;
  protected PrintWriter writer = null;
  protected GZIPResponseStream gzipResponseStream=null;

  public GZIPResponseWrapper(HttpServletResponse response) {
    super(response);
    origResponse = response;
  }

  public ServletOutputStream createOutputStream() throws IOException {
	  gzipResponseStream=new GZIPResponseStream(origResponse);
    return gzipResponseStream;
  }

  public void finishResponse() {
    try {
      if (writer != null) {
        writer.close();
      } else {
        if (stream != null) {
          stream.close();
        }
      }
    } catch (IOException e) {}
  }

  public void flushBuffer() throws IOException {
    stream.flush();
  }

  public ServletOutputStream getOutputStream() throws IOException {
    if (writer != null) {
      throw new IllegalStateException("getWriter() has already been called!");
    }

    if (stream == null)
      stream = createOutputStream();
    return (stream);
  }

  public PrintWriter getWriter() throws IOException {
    if (writer != null) {
      return (writer);
    }

    if (stream != null) {
      throw new IllegalStateException("getOutputStream() has already been called!");
    }

   stream = createOutputStream();
   writer = new PrintWriter(new OutputStreamWriter(stream, "UTF-8"));
   return (writer);
  }

  public void setContentLength(int length) {}
  public long getContentLength(){
	  	if(gzipResponseStream==null){
	  	return 0;	
	  	}else{
		return gzipResponseStream.written;
	  	}
  }
}
