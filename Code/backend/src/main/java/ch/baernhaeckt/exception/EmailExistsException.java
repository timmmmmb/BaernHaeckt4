package ch.baernhaeckt.exception;

public class EmailExistsException extends Exception {
    public EmailExistsException(String msg) {
        super(msg);
    }
}
