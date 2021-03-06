package ru.nautilus.vk;

import com.vk.api.sdk.exceptions.ApiException;
import com.vk.api.sdk.exceptions.ClientException;
import ru.nautilus.model.NewsInfo;
import ru.nautilus.model.PhotoInfo;
import ru.nautilus.model.PhotoAlbumInfo;
import ru.nautilus.model.SubscribersInfo;

import java.util.List;


/**
 * @author Denisenko Denis
 */
public interface VkApi {

    List<SubscribersInfo> getSubscribersList() throws ClientException, ApiException;
    List<NewsInfo> getNews() throws ClientException, ApiException;
    List<PhotoAlbumInfo> getPhotoGalleryInfo() throws ClientException, ApiException;
    List<PhotoInfo> getPhotoAlbumInfo(String albumId) throws ClientException, ApiException;
}
