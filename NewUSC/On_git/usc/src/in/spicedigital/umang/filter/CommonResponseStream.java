package in.spicedigital.umang.filter;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServletResponse;

public class CommonResponseStream extends ServletOutputStream{

	protected long written = 0;
	protected ByteArrayOutputStream baos = null;
	protected boolean closed = false;
	protected HttpServletResponse response = null;
	protected ServletOutputStream output = null;

	public CommonResponseStream(HttpServletResponse response) throws IOException {
		super();
		closed = false;
		this.response = response;
		this.output = response.getOutputStream();
		baos = new ByteArrayOutputStream();
	}

	public void close() throws IOException {
		if (closed) {
			throw new IOException("This output stream has already been closed");
		}

		byte[] bytes = baos.toByteArray();

		response.addHeader("Content-Length", Integer.toString(bytes.length));
		response.addHeader("Server", "Oops1.0");
		//response.addHeader("Content-Encoding", "gzip");
		output.write(bytes);
		output.flush();
		output.close();
		baos.close();
		closed = true;
	}

	public void flush() throws IOException {
		if (closed) {
			throw new IOException("Cannot flush a closed output stream");
		}
		baos.flush();
	}

	public void write(int b) throws IOException {
		if (closed) {
			throw new IOException("Cannot write to a closed output stream");
		}
		baos.write((byte) b);
		written++;
		// System.out.println("write(int b)"+written);
	}

	public void write(byte b[]) throws IOException {
		write(b, 0, b.length);
	}

	public void write(byte b[], int off, int len) throws IOException {
		//// System.out.println("writing...");
		if (closed) {
			throw new IOException("Cannot write to a closed output stream");
		}
		baos.write(b, off, len);
		written += len;
		// System.out.println("write(byte b[], int off, int len)"+written);
	}

	public boolean closed() {
		return (this.closed);
	}

	public void reset() {
		// noop
	}

	@Override
	public boolean isReady() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void setWriteListener(WriteListener paramWriteListener) {
		// TODO Auto-generated method stub

	}

}
