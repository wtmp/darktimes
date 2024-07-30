package org.wtmp.darktimes.repository;

public interface Repository<T> {
    T add(T object);
    T remove(T object);
}
