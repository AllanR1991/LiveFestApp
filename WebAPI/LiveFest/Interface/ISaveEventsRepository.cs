﻿using LiveFest.Domains;

namespace LiveFest.Interface
{
    public interface ISaveEventsRepository
    {
        public List<SaveEvents> GetAll();

        bool SaveEvent(Guid userID, Guid eventID);

        void DeleteSaveEvent(Guid userID, Guid eventID);
    }
}
